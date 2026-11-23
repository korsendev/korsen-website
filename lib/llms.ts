import { blogPosts } from "@/lib/blog-data"
import { ENGAGEMENT } from "@/lib/content/engagement"
import { FAQ } from "@/lib/content/faq"
import { META, SITE } from "@/lib/content/global"
import { HERO } from "@/lib/content/hero"
import { NOSOTROS } from "@/lib/content/nosotros"
import { BOSQRA } from "@/lib/content/bosqra"
import { SERVICIOS } from "@/lib/content/servicios"
import { SOLUCIONES } from "@/lib/content/soluciones"
import { TECNOLOGIAS } from "@/lib/content/tecnologias"
import { LANDINGS } from "@/lib/content/posicionamiento"
import { PROJECTS } from "@/lib/projects-data"

const u = (p: string) => `${SITE.url}${p}`

/** Resumen para asistentes de IA (convención llms.txt): quién es MAYNODE, qué ofrece y dónde leer más. Se genera desde el mismo contenido del sitio. */
export function buildLlms(): string {
  const L = NOSOTROS.leadership
  return `# ${SITE.name}

> ${META.description}

${SITE.name} (antes Korsen Dev, desde 2019) es un grupo tecnológico con sede en ${SITE.location.split(" · ")[0]} que atiende a empresas de forma remota en Norteamérica, Latinoamérica y Europa. Responde en español e inglés. Contacto: ${SITE.email} · ${SITE.phone}. CEO y fundador: ${L.name}.

Datos clave: ${HERO.facts.join("; ")}.

## Soluciones
${SOLUCIONES.map((s) => `- [${s.title}](${u(`/soluciones/${s.slug}`)}): ${s.seoDescription}`).join("\n")}

## Servicios
${SERVICIOS.map((s) => `- [${s.title}](${u(`/servicios/${s.slug}`)}): ${s.short}`).join("\n")}

## Desarrollo de software
${LANDINGS.map((l) => `- [${l.seoTitle}](${u(`/${l.slug}`)}): ${l.seoDescription}`).join("\n")}

## Producto propio
- [${BOSQRA.name}](${u(`/productos/${BOSQRA.slug}`)}): ${BOSQRA.text}

## Empresa
- [Proyectos](${u("/proyectos")}): casos y sistemas entregados.
- [Cómo trabajamos](${u("/como-trabajamos")}): método, gobierno del proyecto y entregables.
- [Nosotros](${u("/nosotros")}): quiénes somos y el cambio de Korsen Dev a MAYNODE.
- [Cobertura](${u("/cobertura")}): países y zonas horarias atendidas.
- [Evaluar proyecto](${u("/diagnostico")}): formulario para solicitar una propuesta (respuesta en 24 h).
- [Contacto](${u("/contacto")})

## Blog
${blogPosts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}`)}): ${p.excerpt}`).join("\n")}

## Opcional
- [Texto completo para IA](${u("/llms-full.txt")})
- [Mapa del sitio](${u("/sitemap.xml")})
${TECNOLOGIAS.map((t) => `- [Desarrollo con ${t.title}](${u(`/tecnologias/${t.slug}`)}): ${t.lead}`).join("\n")}
`
}

/** Versión extendida con el contenido principal en un solo documento. */
export function buildLlmsFull(): string {
  const faq = FAQ.items.map((i) => `### ${i.q}\n${i.a}`).join("\n\n")
  const sol = SOLUCIONES.map(
    (s) =>
      `### ${s.title}\n${s.lead}\n\n**Problema:** ${s.problem}\n**Resultado:** ${s.result}\n**Plazo típico:** ${s.time}\n**Incluye:**\n${s.includes.map((i) => `- ${i}`).join("\n")}\n**Caso:** ${s.caseName}: ${s.caseText}\n${s.faqs.map((f) => `**${f.q}** ${f.a}`).join("\n")}\nMás: ${u(`/soluciones/${s.slug}`)}`,
  ).join("\n\n")
  const serv = SERVICIOS.map(
    (s) => `### ${s.title}\n${s.lead}\n**Servicios:** ${s.services.join("; ")}.\n**Entregables:** ${s.deliverables.join("; ")}.\nMás: ${u(`/servicios/${s.slug}`)}`,
  ).join("\n\n")
  const proj = PROJECTS.map((p) => `- **${p.name}** (${p.sector}): ${p.description}${p.url ? ` ${p.url}` : ""}`).join("\n")
  const eng = ENGAGEMENT.models.map((m) => `- **${m.name}:** ${m.what} Ideal para: ${m.ideal}`).join("\n")
  return `${buildLlms()}
---

# Contenido ampliado

## Soluciones
${sol}

## Servicios
${serv}

## Proyectos
${proj}

## Modelos de contratación
${eng}

## Preguntas frecuentes
${faq}
`
}
