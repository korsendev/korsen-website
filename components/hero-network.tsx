"use client"

import { useEffect, useRef } from "react"

/** Isotipo MAYNODE (viewBox 208×118): la "M" y la barra "enlace" lima. */
const M_PATH = "M0 118V0H36.53L63.53 66.27H66.6L93.27 0H130.45V118H104.26V17.3L107.98 17.62L76.78 94.08H51.56L20.2 17.62L24.25 17.3V118Z"
const BAR = { x: 141, y: 62, w: 67, h: 25 }
const VB = { w: 208, h: 118 }
const LIME = "196,255,0"

type Node = { tx: number; ty: number; z: number; bar: boolean; sx: number; sy: number; delay: number; phase: number }
type Edge = [number, number]
type Pulse = { e: number; t: number; v: number }

function sampleLogo(): { nodes: Node[]; edges: Edge[] } {
  const S = 5.4
  const nodes: Node[] = []
  const mk = (x: number, y: number, bar: boolean) => {
    nodes.push({
      tx: x,
      ty: y,
      z: bar ? 14 : 0,
      bar,
      sx: -60 + Math.random() * (VB.w + 120),
      sy: -80 + Math.random() * (VB.h + 160),
      delay: Math.random() * 0.9,
      phase: Math.random() * Math.PI * 2,
    })
  }

  // contorno de la M muestreado sobre el trazado real
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
  svg.setAttribute("width", "0")
  svg.setAttribute("height", "0")
  svg.style.position = "absolute"
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute("d", M_PATH)
  svg.appendChild(path)
  document.body.appendChild(svg)
  const len = path.getTotalLength()
  const outline: [number, number][] = []
  for (let l = 0; l < len; l += 4.2) {
    const p = path.getPointAtLength(l)
    outline.push([p.x, p.y])
  }
  svg.remove()
  outline.forEach(([x, y]) => mk(x, y, false))

  // relleno interior (rejilla hexagonal)
  const cv = document.createElement("canvas").getContext("2d")!
  const p2 = new Path2D(M_PATH)
  for (let j = 0, y = 0; y <= VB.h; j++, y += S * 0.866) {
    for (let x = (j % 2) * (S / 2); x <= 131; x += S) {
      if (!cv.isPointInPath(p2, x, y)) continue
      if (outline.some(([ox, oy]) => Math.hypot(ox - x, oy - y) < 3.4)) continue
      mk(x, y, false)
    }
  }

  // barra lima: contorno + relleno
  for (let x = BAR.x; x <= BAR.x + BAR.w + 0.1; x += S) {
    mk(x, BAR.y, true)
    mk(x, BAR.y + BAR.h, true)
  }
  for (let y = BAR.y + S; y < BAR.y + BAR.h - 1; y += S) {
    mk(BAR.x, y, true)
    mk(BAR.x + BAR.w, y, true)
  }
  for (let y = BAR.y + S; y < BAR.y + BAR.h - 2; y += S) {
    for (let x = BAR.x + S; x < BAR.x + BAR.w - 2; x += S) mk(x + (Math.round(y / S) % 2) * 2, y, true)
  }

  const edges: Edge[] = []
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      if (nodes[i].bar !== nodes[j].bar) continue
      if (Math.hypot(nodes[i].tx - nodes[j].tx, nodes[i].ty - nodes[j].ty) <= S * 1.18) edges.push([i, j])
    }
  }
  return { nodes, edges }
}

const ease = (t: number) => 1 - Math.pow(1 - t, 3)

/**
 * Red de nodos que se ensambla hasta formar el isotipo MAYNODE (M + barra lima),
 * con pulsos de datos, un barrido de luz y parallax 3D con el cursor.
 */
export function HeroNetwork({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const { nodes, edges } = sampleLogo()
    const pulses: Pulse[] = Array.from({ length: 16 }, () => ({ e: Math.floor(Math.random() * edges.length), t: Math.random(), v: 0.006 + Math.random() * 0.008 }))

    let w = 0
    let h = 0
    let raf = 0
    let running = false
    let t0 = performance.now()
    let mx = 0
    let my = 0
    let smx = 0
    let smy = 0

    const resize = () => {
      const r = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = r.width
      h = r.height
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const frame = (now: number) => {
      const t = reduce ? 99 : (now - t0) / 1000
      smx += (mx - smx) * 0.06
      smy += (my - smy) * 0.06
      const ry = Math.sin(t * 0.45) * 0.16 + smx * 0.45
      const rx = smy * 0.28
      const cyr = Math.cos(ry)
      const syr = Math.sin(ry)
      const cxr = Math.cos(rx)
      const sxr = Math.sin(rx)
      const scale = (w * 0.46) / VB.w
      const ox = VB.w / 2
      const oy = VB.h / 2
      const cam = 260

      ctx.clearRect(0, 0, w, h)

      // barrido de luz (de izquierda a derecha)
      const sweep = reduce ? -999 : ((t * 0.28) % 1.7) * (VB.w + 80) - 40

      const pos = nodes.map((n) => {
        const e = reduce ? 1 : ease(Math.min(Math.max((t - n.delay) / 2, 0), 1))
        const bob = e >= 1 && !reduce ? Math.sin(t * 1.3 + n.phase) * 0.7 : 0
        let x = n.sx + (n.tx - n.sx) * e - ox
        let y = n.sy + (n.ty - n.sy) * e - oy + bob
        let z = n.z * e
        const x1 = x * cyr + z * syr
        const z1 = -x * syr + z * cyr
        const y2 = y * cxr - z1 * sxr
        const z2 = y * sxr + z1 * cxr
        const k = cam / (cam - z2)
        x = x1 * k
        y = y2 * k
        const glow = Math.exp(-Math.pow((n.tx - sweep) / 16, 2))
        return { x: w / 2 + x * scale, y: h / 2 + y * scale, e, k, glow, bar: n.bar }
      })

      // aristas
      ctx.lineWidth = 1
      for (const [a, b] of edges) {
        const pa = pos[a]
        const pb = pos[b]
        const e = Math.min(pa.e, pb.e)
        if (e <= 0.02) continue
        const g = Math.max(pa.glow, pb.glow)
        const bar = pa.bar
        ctx.strokeStyle = bar ? `rgba(${LIME},${(0.35 * e + g * 0.4).toFixed(3)})` : `rgba(${g > 0.15 ? LIME : "247,247,247"},${(0.13 * e + g * 0.5).toFixed(3)})`
        ctx.beginPath()
        ctx.moveTo(pa.x, pa.y)
        ctx.lineTo(pb.x, pb.y)
        ctx.stroke()
      }

      // pulsos de datos
      ctx.shadowColor = `rgba(${LIME},1)`
      ctx.shadowBlur = 12
      for (const p of pulses) {
        if (!reduce) p.t += p.v
        if (p.t > 1) {
          p.e = Math.floor(Math.random() * edges.length)
          p.t = 0
        }
        const [a, b] = edges[p.e]
        const pa = pos[a]
        const pb = pos[b]
        if (Math.min(pa.e, pb.e) < 0.95) continue
        ctx.beginPath()
        ctx.arc(pa.x + (pb.x - pa.x) * p.t, pa.y + (pb.y - pa.y) * p.t, 2.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${LIME},1)`
        ctx.fill()
      }

      // nodos
      for (const p of pos) {
        if (p.e <= 0.02) continue
        const r = ((p.bar ? 2.2 : 1.7) + p.glow * 2) * p.k * Math.max(w / 1100, 0.55)
        ctx.shadowBlur = p.bar ? 14 : p.glow > 0.2 ? 14 : 3
        ctx.shadowColor = `rgba(${LIME},0.9)`
        ctx.beginPath()
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
        ctx.fillStyle = p.bar || p.glow > 0.25 ? `rgba(${LIME},${0.55 + p.e * 0.45})` : `rgba(247,247,247,${0.25 + p.e * 0.65})`
        ctx.fill()
      }
      ctx.shadowBlur = 0

      if (running && !reduce) raf = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running) return
      running = true
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
    const io = new IntersectionObserver(([e]) => (e.isIntersecting && !reduce ? start() : stop()), { threshold: 0.02 })
    io.observe(canvas)

    const onMove = (e: PointerEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
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
