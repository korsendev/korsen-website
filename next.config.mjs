/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Rutas heredadas de la etapa anterior
      { source: "/cotizar/:topic", destination: "/diagnostico?tema=:topic", permanent: false },
      { source: "/cotizar", destination: "/diagnostico", permanent: false },
      { source: "/soluciones-y-tecnologias", destination: "/servicios", permanent: true },
      { source: "/casos/:slug", destination: "/proyectos", permanent: true },
      // Dominio anterior: todo korsen.dev (y www) redirige con 301 a maynode.dev
      {
        source: "/:path*",
        has: [{ type: "host", value: "(www\.)?korsen\.dev" }],
        destination: "https://maynode.dev/:path*",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
