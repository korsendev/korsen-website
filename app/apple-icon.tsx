import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import path from "node:path"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default async function AppleIcon() {
  const svg = await readFile(path.join(process.cwd(), "public/brand/maynode-isotipo.svg"))
  const src = `data:image/svg+xml;base64,${svg.toString("base64")}`
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#050505", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} width={124} height={70} alt="" />
      </div>
    ),
    size,
  )
}
