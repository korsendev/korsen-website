/** Inicio §1.11 */

/** Tecnologías con página propia en /tecnologias/[slug] */
export const TECH_SLUGS: Record<string, string> = {
  React: "react",
  "Next.js": "nextjs",
  TypeScript: "typescript",
  "React Native": "react-native",
  Flutter: "flutter",
  "Node.js": "nodejs",
  Python: "python",
  ".NET": "dotnet",
  Java: "java",
  PostgreSQL: "postgresql",
  MongoDB: "mongodb",
  AWS: "aws",
  Kubernetes: "kubernetes",
}

export const STACK = {
  label: "09 · STACK TECNOLÓGICO",
  title: "Cualquier stack,",
  accent: "dominado.",
  intro: "Más de 60 tecnologías en producción. No te adaptamos a una herramienta: elegimos la mejor para tu caso y la integramos con lo que ya usas.",
  areas: [
    { area: "Frontend web", icon: "panels", tags: ["React", "Next.js", "Vue", "Angular", "Svelte", "Astro", "TypeScript", "Tailwind"] },
    { area: "Móvil", icon: "phone", tags: ["React Native", "Expo", "Flutter", "Swift", "Kotlin", "PWA"] },
    { area: "Backend", icon: "code", tags: ["Node.js", "NestJS", "Python", "Django", "FastAPI", "Laravel", "Go", ".NET", "Java"] },
    { area: "Datos", icon: "database", tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase", "Convex", "Prisma"] },
    { area: "Nube y DevOps", icon: "cloud", tags: ["AWS", "Google Cloud", "Azure", "Vercel", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
    { area: "Inteligencia y datos", icon: "sparkles", tags: ["OpenAI", "Anthropic", "LangChain", "Vector DB", "Power BI", "Metabase", "Python ML"] },
    { area: "Integraciones", icon: "plug", tags: ["Stripe", "PayPal", "WhatsApp API", "Meta", "Google APIs", "DGII e-CF", "Twilio", "REST", "GraphQL"] },
    { area: "Producto y negocio", icon: "cart", tags: ["Shopify", "WordPress", "Strapi", "Figma", "n8n", "Zapier", "Odoo"] },
  ],
} as const
