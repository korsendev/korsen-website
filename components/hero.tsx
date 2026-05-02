"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PATH_SOLUCIONES_TECNOLOGIAS, pathSolucionLanding } from "@/lib/site-paths"
import { ArrowRight, Code, Smartphone, Globe, Target, Trophy, Cpu } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-36 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,255,47,0.08),transparent_35%),radial-gradient(circle_at_80%_25%,rgba(0,255,47,0.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(16,185,129,0.08),transparent_45%),linear-gradient(135deg,rgba(4,12,10,0.98)_0%,rgba(3,9,8,0.94)_45%,rgba(2,8,7,0.9)_100%)] backdrop-blur-3xl">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,47,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,47,0.06)_1px,transparent_1px)] bg-[size:42px_42px] opacity-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_58%,rgba(0,255,47,0.16)_59%,transparent_61%),radial-gradient(circle_at_50%_50%,transparent_70%,rgba(0,255,47,0.12)_71%,transparent_73%)] opacity-20 animate-[spin_28s_linear_infinite]"></div>
        <div className="absolute -left-1/3 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-primary/20 to-transparent blur-2xl opacity-35 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_45%,rgba(0,255,47,0.16)_50%,transparent_55%)] bg-[length:220%_100%] opacity-30 animate-[pulse_5s_ease-in-out_infinite]"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle,rgba(0,255,47,0.8)_1px,transparent_1.5px)] bg-[size:34px_34px]"></div>
        <div className="absolute top-16 left-8 w-[30rem] h-[30rem] bg-primary/12 rounded-full blur-[170px] animate-pulse"></div>
        <div className="absolute bottom-8 right-6 w-[34rem] h-[34rem] bg-emerald-400/12 rounded-full blur-[220px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[44rem] h-[44rem] bg-primary/6 rounded-full blur-[280px] animate-pulse delay-2000"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-primary/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,47,0.14),transparent_72%)]"></div>
      </div>

      {/* Floating icons */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <Code className="w-8 h-8 text-primary/30" />
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float delay-1000">
        <Smartphone className="w-6 h-6 text-primary/30" />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float delay-2000">
        <Globe className="w-10 h-10 text-primary/30" />
      </div>

      <div className="w-full relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-6 shadow-[0_0_20px_rgba(0,255,47,0.2)]">
                <span className="flex h-6 w-6 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-primary">
                  <Cpu className="h-3.5 w-3.5" />
                </span>
                Software premium para liderar
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 leading-[1.05] tracking-tight">
                <span className="text-balance uppercase">Proyectos creados </span>
                <span className="text-primary uppercase text-balance">con estándar de dioses</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground/95 mb-10 text-pretty max-w-xl mx-auto lg:mx-0">
                En Korsen desarrollamos soluciones digitales con precisión, claridad y una base tecnológica preparada para crecer, integrarse y rendir al más alto nivel.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-foreground/90 backdrop-blur-sm">
                  Desarrollo a medida
                </div>
                <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-foreground/90 backdrop-blur-sm">
                  Escalable y seguro
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <Button
                  size="lg"
                  asChild
                  className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg rounded-xl shadow-[0_0_34px_rgba(0,255,47,0.28)] hover:shadow-[0_0_58px_rgba(0,255,47,0.5)] hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.99] transition-all duration-300 ease-out animate-glow"
                >
                  <Link href={pathSolucionLanding("desarrollo-software-a-medida")}>
                    Iniciar proyecto
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-8 py-3 text-lg rounded-xl border-primary/40 bg-background/40 backdrop-blur-sm hover:border-primary hover:bg-primary/12 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_0_26px_rgba(0,255,47,0.22)] active:scale-[0.99] transition-all duration-300 ease-out">
                  <Link href={PATH_SOLUCIONES_TECNOLOGIAS}>Conocer soluciones y tecnologías</Link>
                </Button>
              </div>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto lg:hidden text-center">
                <div className="rounded-2xl border border-primary/35 bg-background px-4 py-5 shadow-[0_0_25px_rgba(0,255,47,0.14)]">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Trophy className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-extrabold text-primary">+50</p>
                  <p className="text-xs text-muted-foreground">proyectos entregados</p>
                  <p className="text-[11px] text-muted-foreground/80 mt-1">Webs, apps y plataformas listas para producción.</p>
                </div>
                <div className="rounded-2xl border border-primary/35 bg-background px-4 py-5 shadow-[0_0_25px_rgba(0,255,47,0.14)]">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Target className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-extrabold text-primary">3x</p>
                  <p className="text-xs text-muted-foreground">mejor rendimiento técnico</p>
                  <p className="text-[11px] text-muted-foreground/80 mt-1">Optimización de carga, arquitectura y experiencia.</p>
                </div>
                <div className="rounded-2xl border border-primary/35 bg-background px-4 py-5 shadow-[0_0_25px_rgba(0,255,47,0.14)]">
                  <div className="mx-auto mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Target className="h-4 w-4" />
                  </div>
                  <p className="text-2xl font-extrabold text-primary">72%</p>
                  <p className="text-xs text-muted-foreground">objetivo anual completado</p>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary/15">
                    <div className="h-full w-[72%] rounded-full bg-primary" />
                  </div>
                  <p className="text-[11px] text-muted-foreground/80 mt-1">Meta: 100 proyectos premium este año.</p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-2xl mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-violet-500/10 blur-3xl" />
              <div className="relative">
                <Image
                  src="/subjecthero.png"
                  alt="Figura clásica futurista con laptop"
                  width={1080}
                  height={1080}
                  priority
                  className="relative z-10 w-full h-auto object-contain mix-blend-screen"
                  style={{ borderWidth: 0, borderColor: "transparent", borderStyle: "none", borderImage: "none" }}
                />
              </div>
              <div className="hidden lg:block absolute -left-16 top-10 z-20 w-64 rounded-3xl border border-primary/35 bg-background/80 px-6 py-5 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,47,0.2)] animate-float hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Trophy className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold text-primary">+50</p>
                <p className="text-sm text-foreground/90">proyectos entregados</p>
                <p className="text-xs text-muted-foreground mt-1">Webs, apps y plataformas construidas con estándar premium.</p>
              </div>
              <div className="hidden lg:block absolute -right-12 top-20 z-30 w-72 rounded-3xl border border-primary/35 bg-background/85 px-6 py-5 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,47,0.2)] animate-float delay-1000 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold text-primary">3x</p>
                <p className="text-sm text-foreground/90">mejor rendimiento técnico</p>
                <p className="text-xs text-muted-foreground mt-1">Menor tiempo de carga y mayor estabilidad bajo demanda.</p>
              </div>
              <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 -bottom-6 z-30 w-80 rounded-3xl border border-primary/35 bg-background/85 px-6 py-5 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,47,0.2)] animate-float delay-2000 hover:-translate-y-2 transition-transform duration-300">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold text-primary">72%</p>
                <p className="text-sm text-foreground/90">objetivo anual completado</p>
                <div className="mt-2 h-2.5 w-full overflow-hidden rounded-full bg-primary/15">
                  <div className="h-full w-[72%] rounded-full bg-primary" />
                </div>
                <p className="text-xs text-muted-foreground mt-2">Meta: 100 proyectos premium entregados en el año.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
