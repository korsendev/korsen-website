import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const alt = "MAYNODE — Software que produce resultados"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OpengraphImage() {
  const svg = await readFile(path.join(process.cwd(), "public/brand/maynode-logo.svg"))
  const src = `data:image/svg+xml;base64,${svg.toString("base64")}`
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#050505",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          color: "#F7F7F7",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={330} height={180} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", width: 56, height: 12, background: "#C4FF00", marginBottom: 28 }} />
          <div style={{ fontSize: 68, fontWeight: 800, letterSpacing: -2.5, lineHeight: 1.02, textTransform: "uppercase", display: "flex" }}>
            Software que hace crecer tu negocio
          </div>
          <div style={{ fontSize: 26, color: "#A6A6A6", marginTop: 22, display: "flex" }}>maynode.dev</div>
        </div>
      </div>
    ),
    size,
  )
}
