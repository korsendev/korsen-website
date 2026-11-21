/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rutas heredadas de la etapa anterior
      { source: "/cotizar/:topic", destination: "/diagnostico?tema=:topic", permanent: false },
      { source: "/cotizar", destination: "/diagnostico", permanent: false },
      { source: "/soluciones-y-tecnologias", destination: "/servicios", statusCode: 301 },
      { source: "/casos/:slug", destination: "/proyectos", statusCode: 301 },
      // Dominio anterior: todo korsen.dev (y www) redirige con 301 a maynode.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\\.)?korsen\\.dev" }],
        destination: "https://maynode.dev/:path*",
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
