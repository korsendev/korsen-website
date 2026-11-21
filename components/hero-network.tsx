"use client"

import { useEffect, useRef } from "react"

type V3 = [number, number, number]
type Edge = [number, number]
type Pulse = { e: number; t: number; v: number; dir: 1 | -1 }

const LIME = "196,255,0"
const N = 120

/** Puntos repartidos de forma uniforme sobre una esfera (espiral de Fibonacci). */
function spherePoints(n: number): V3[] {
  const pts: V3[] = []
  const ga = Math.PI * (3 - Math.sqrt(5))
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2
    const r = Math.sqrt(1 - y * y)
    const a = ga * i
    pts.push([Math.cos(a) * r, y, Math.sin(a) * r])
  }
  return pts
}

function buildEdges(pts: V3[]): Edge[] {
  const edges: Edge[] = []
  const max = 0.46
  for (let i = 0; i < pts.length; i++) {
    const near: { j: number; d: number }[] = []
    for (let j = i + 1; j < pts.length; j++) {
      const d = Math.hypot(pts[i][0] - pts[j][0], pts[i][1] - pts[j][1], pts[i][2] - pts[j][2])
      if (d < max) near.push({ j, d })
    }
    near.sort((a, b) => a.d - b.d)
    near.slice(0, 3).forEach((n) => edges.push([i, n.j]))
  }
  return edges
}

/** Esfera de nodos en rotación con pulsos de datos, anillos orbitales y parallax con el cursor. */
export function HeroNetwork({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const pts = spherePoints(N)
    const edges = buildEdges(pts)
    const hubs = new Set<number>([3, 22, 47, 71, 96, 110])
    const pulses: Pulse[] = Array.from({ length: 14 }, () => ({ e: Math.floor(Math.random() * edges.length), t: Math.random(), v: 0.004 + Math.random() * 0.006, dir: Math.random() > 0.5 ? 1 : -1 }))

    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let running = false
    let yaw = 0.6
    let tiltX = 0.35
    let tx = 0.35
    let ty = 0
    let last = performance.now()

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const project = (p: V3, cy: number, sy: number, cx: number, sx: number, R: number): [number, number, number] => {
      const x1 = p[0] * cy + p[2] * sy
      const z1 = -p[0] * sy + p[2] * cy
      const y2 = p[1] * cx - z1 * sx
      const z2 = p[1] * sx + z1 * cx
      const persp = 1 / (1 - z2 * 0.32)
      return [w / 2 + x1 * R * persp, h / 2 + y2 * R * persp, z2]
    }

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 16.67, 3)
      last = now
      if (!reduce) {
        yaw += 0.0035 * dt
        tiltX += (tx - tiltX) * 0.04
      }
      const cy = Math.cos(yaw)
      const sy = Math.sin(yaw)
      const cx = Math.cos(tiltX + ty * 0.0)
      const sx = Math.sin(tiltX)
      const R = Math.min(w, h) * 0.3

      ctx.clearRect(0, 0, w, h)

      // halo central
      const g = ctx.createRadialGradient(w / 2, h / 2, R * 0.2, w / 2, h / 2, R * 1.5)
      g.addColorStop(0, `rgba(${LIME},0.10)`)
      g.addColorStop(1, `rgba(${LIME},0)`)
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      // anillos orbitales
      for (let k = 0; k < 3; k++) {
        const rr = R * (1.18 + k * 0.2)
        ctx.save()
        ctx.translate(w / 2, h / 2)
        ctx.rotate(-0.5 + k * 0.7 + (reduce ? 0 : yaw * (k % 2 ? -0.25 : 0.25)))
        ctx.scale(1, 0.32 + k * 0.08)
        ctx.beginPath()
        ctx.arc(0, 0, rr, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(${LIME},${0.16 - k * 0.04})`
        ctx.setLineDash(k === 1 ? [2, 8] : [])
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.setLineDash([])
        // satélite
        const a = (reduce ? 1 : yaw * (1.2 + k * 0.5)) + k * 2
        ctx.beginPath()
        ctx.arc(Math.cos(a) * rr, Math.sin(a) * rr, 3.2 - k * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${LIME},0.95)`
        ctx.shadowColor = `rgba(${LIME},0.9)`
        ctx.shadowBlur = 12
        ctx.fill()
        ctx.restore()
      }

      const proj = pts.map((p) => project(p, cy, sy, cx, sx, R))

      // aristas
      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        const pa = proj[a]
        const pb = proj[b]
        const depth = (pa[2] + pb[2]) / 2
        const alpha = 0.05 + (depth + 1) * 0.16
        ctx.strokeStyle = `rgba(${LIME},${alpha.toFixed(3)})`
        ctx.beginPath()
        ctx.moveTo(pa[0], pa[1])
        ctx.lineTo(pb[0], pb[1])
        ctx.stroke()
      }

      // pulsos de datos
      ctx.shadowColor = `rgba(${LIME},1)`
      ctx.shadowBlur = 10
      for (const p of pulses) {
        if (!reduce) p.t += p.v * p.dir * dt
        if (p.t > 1 || p.t < 0) {
          p.e = Math.floor(Math.random() * edges.length)
          p.t = p.dir === 1 ? 0 : 1
        }
        const [a, b] = edges[p.e]
        const pa = proj[a]
        const pb = proj[b]
        const x = pa[0] + (pb[0] - pa[0]) * p.t
        const y = pa[1] + (pb[1] - pa[1]) * p.t
        const z = pa[2] + (pb[2] - pa[2]) * p.t
        ctx.beginPath()
        ctx.arc(x, y, 1.6 + (z + 1) * 1.1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${0.5 + (z + 1) * 0.25})`
        ctx.fill()
      }

      // nodos (de atrás hacia delante)
      const order = proj.map((_, i) => i).sort((a, b) => proj[a][2] - proj[b][2])
      for (const i of order) {
        const [x, y, z] = proj[i]
        const hub = hubs.has(i)
        const near = (z + 1) / 2
        const r = (hub ? 4.2 : 1.6) + near * (hub ? 2.2 : 1.8)
        ctx.shadowBlur = hub ? 18 : near > 0.6 ? 8 : 0
        ctx.shadowColor = `rgba(${LIME},0.9)`
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fillStyle = hub ? `rgba(${LIME},${0.55 + near * 0.45})` : `rgba(${near > 0.55 ? LIME : "247,247,247"},${0.25 + near * 0.7})`
        ctx.fill()
        if (hub && near > 0.35) {
          ctx.shadowBlur = 0
          ctx.beginPath()
          ctx.arc(x, y, r + 5 + Math.sin(now / 500 + i) * 1.5, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${LIME},${0.25 * near})`
          ctx.stroke()
        }
      }
      ctx.shadowBlur = 0

      if (running && !reduce) raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      cancelAnimationFrame(raf)
    }

    resize()
    if (reduce) frame(performance.now())

    const ro = new ResizeObserver(() => {
      resize()
      if (reduce) frame(performance.now())
    })
    ro.observe(canvas)

    const io = new IntersectionObserver(([e]) => (e.isIntersecting && !reduce ? start() : stop()), { threshold: 0.05 })
    io.observe(canvas)

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect()
      const nx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth
      const ny = (e.clientY - (r.top + r.height / 2)) / window.innerHeight
      tx = 0.35 + ny * 0.6
      yaw += nx * 0.0006
    }
    window.addEventListener("pointermove", onMove, { passive: true })

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      window.removeEventListener("pointermove", onMove)
    }
  }, [])

  return <canvas ref={ref} className={className} aria-hidden />
}
