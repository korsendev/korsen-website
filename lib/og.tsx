import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = "image/png"

type Opts = {
  /** Etiqueta mono superior derecha, ej. "SOLUCIÓN 01" */
  kicker: string
  /** Titular; la última parte (accent) va en lima */
  title: string
  accent?: string
}

const root = process.cwd()
const font = (f: string) => readFile(path.join(root, "node_modules/@fontsource", f))

/** Imagen Open Graph 1200×630 con la identidad de MAYNODE: fondo #050505, logo, titular en Sora y franja lima. */
export async function renderOg({ kicker, title, accent }: Opts) {
  const [sora, mono, logo] = await Promise.all([
    font("sora/files/sora-latin-800-normal.woff"),
    font("jetbrains-mono/files/jetbrains-mono-latin-700-normal.woff"),
    readFile(path.join(root, "public/brand/maynode-logo.svg")),
  ])
  const logoSrc = `data:image/svg+xml;base64,${logo.toString("base64")}`

  const words = [...title.split(" ").map((w) => ({ w, a: false })), ...(accent ? accent.split(" ").map((w) => ({ w, a: true })) : [])].filter((x) => x.w)
  const len = words.map((x) => x.w).join(" ").length
  const size = len <= 26 ? 88 : len <= 40 ? 74 : len <= 58 ? 62 : 52

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#050505",
          backgroundImage: "radial-gradient(circle at 88% 0%, rgba(196,255,0,0.22) 0%, rgba(196,255,0,0) 45%)",
          color: "#F7F7F7",
          fontFamily: "Sora",
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between", padding: "56px 72px 40px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logoSrc} width={132} height={72} alt="" />
            <div style={{ display: "flex", alignItems: "center", fontFamily: "JetBrains Mono", fontSize: 22, letterSpacing: 3, color: "#C4FF00" }}>
              <div style={{ width: 12, height: 12, background: "#C4FF00", marginRight: 14, display: "flex" }} />
              {kicker}
            </div>
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", maxWidth: 1040, fontSize: size, lineHeight: 1.02, letterSpacing: -3, textTransform: "uppercase" }}>
            {words.map((x, i) => (
              <span key={i} style={{ marginRight: size * 0.24, color: x.a ? "#C4FF00" : "#F7F7F7" }}>
                {x.w}
              </span>
            ))}
          </div>

          <div style={{ display: "flex", fontFamily: "JetBrains Mono", fontSize: 22, color: "#A6A6A6" }}>maynode.dev · Software que hace crecer tu negocio</div>
        </div>

        <div
          style={{
            display: "flex",
            height: 64,
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 72px",
            background: "#C4FF00",
            color: "#050505",
            fontFamily: "JetBrains Mono",
            fontSize: 20,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <span>Propuesta en 48 h</span>
          <span>Primera versión en 4–6 semanas</span>
          <span>Soporte 24/7</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Sora", data: sora, weight: 800, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 700, style: "normal" },
      ],
    },
  )
}
