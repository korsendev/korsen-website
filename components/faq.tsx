"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "¿Cuánto cuesta desarrollar un software a medida?",
    answer: "El costo de desarrollo de software varía según el alcance, la complejidad técnica, las integraciones necesarias y los plazos requeridos. Para darte un presupuesto real y transparente, primero realizamos una evaluación técnica inicial para dimensionar tu proyecto con precisión.",
  },
  {
    question: "¿Cuánto tiempo tarda un proyecto?",
    answer: "Un proyecto de desarrollo típico puede tomar de 8 a 16 semanas para su primera versión de producción (MVP). Proyectos más simples o plataformas acotadas pueden estar listos en 4 a 6 semanas mediante ciclos ágiles de trabajo.",
  },
  {
    question: "¿Trabajan con empresas fuera de República Dominicana?",
    answer: "Sí. Colaboramos de forma remota con empresas de diversos países. Nos adaptamos a tu zona horaria y mantenemos canales de comunicación fluidos y diarios para asegurar total transparencia.",
  },
  {
    question: "¿Pueden trabajar sobre un sistema existente?",
    answer: "Sí. Evaluamos la arquitectura, base de datos y el estado del código de tu software actual para diseñar la mejor estrategia de actualización, corrección de errores o migración tecnológica.",
  },
  {
    question: "¿Pueden desarrollar un MVP (Producto Mínimo Viable)?",
    answer: "Sí. Es una de nuestras especialidades. Te ayudamos a recortar características accesorias para enfocarnos únicamente en el núcleo del problema y lanzar al mercado rápido para validar con usuarios reales.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer: "Sí. Ofrecemos planes de soporte mensual y mantenimiento correctivo/evolutivo para asegurar la estabilidad, seguridad y escalabilidad de tu sistema a medida que tu negocio crece.",
  },
  {
    question: "¿Qué tecnologías utilizan?",
    answer: "Trabajamos con tecnologías robustas de alto rendimiento y preparadas para escalar: React, Next.js, Node.js, TypeScript, Python, Flutter, React Native, PostgreSQL, MongoDB, Kubernetes y servicios cloud como AWS y Azure.",
  },
  {
    question: "¿Cómo comienza un proyecto?",
    answer: "El primer paso es completar nuestro formulario de evaluación de proyecto. Analizamos tu información y te agendamos una llamada de descubrimiento breve para afinar detalles y presentarte una propuesta técnica formal.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Grid Backdrop */}
      <div className="absolute inset-0 technical-grid opacity-10 pointer-events-none" />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Title */}
        <div className="text-left mb-20">
          <span className="text-[10px] font-mono text-primary tracking-widest uppercase block mb-4">
            // common_inquiries
          </span>
          <h2 className="text-4xl sm:text-6xl font-extrabold tracking-tighter uppercase leading-none text-[#F7F7F7] mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-md text-[#A6A6A6] max-w-2xl leading-relaxed font-sans font-medium">
            Respuestas claras sobre costos, tiempos y nuestra forma de trabajo para ayudarte a tomar la mejor decisión tecnológica.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="border border-white/5 bg-[#0B0B0B] rounded-2xl overflow-hidden transition-all duration-300 hover:border-white/10"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-sm sm:text-base text-[#F7F7F7] hover:text-primary transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary" : ""
                    }`}
                  />
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[250px] opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 py-5 text-xs sm:text-sm text-[#A6A6A6] leading-relaxed font-sans font-medium">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
