"use client"

import { useEffect, useRef, useState } from "react"
import { useSearchParams } from "next/navigation"
import { useForm, type FieldPath } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { MnCard } from "@/components/ui/mn-card"
import { DIAGNOSTICO as C } from "@/lib/content/diagnostico"
import { INDUSTRIES } from "@/lib/content/industries"
import { buildWhatsAppUrl } from "@/lib/whatsapp"
import { cn } from "@/lib/utils"

const V = C.validation
const required = z.string({ error: V.required }).trim().min(1, V.required)

const schema = z.object({
  need: required,
  details: required,
  name: required,
  company: required,
  sector: required,
  country: required,
  team: required,
  timeline: required,
  budget: z.string().optional(),
  email: required.pipe(z.string().email(V.email)),
  whatsapp: required.pipe(z.string().regex(/^\+\d[\d\s().-]{6,18}$/, V.phone)),
})

type FormValues = z.infer<typeof schema>

const STEP_FIELDS: FieldPath<FormValues>[][] = [
  ["need"],
  ["details"],
  ["name", "company", "sector", "country", "team"],
  ["timeline"],
  ["budget"],
  ["email", "whatsapp"],
]

const SECTORS = [...INDUSTRIES.items.map((i) => i.name), "Otro"]

function buildMessage(v: FormValues) {
  const need = C.needs.find((n) => n.value === v.need)?.label ?? v.need
  return [
    C.whatsappIntro,
    "",
    `Necesidad: ${need}`,
    `Detalle: ${v.details}`,
    `Nombre: ${v.name}`,
    `Empresa: ${v.company} (${v.sector}, ${v.country}, equipo ${v.team})`,
    `Plazo: ${v.timeline}`,
    v.budget ? `Presupuesto: ${v.budget}` : "",
    `Correo: ${v.email}`,
    `WhatsApp: ${v.whatsapp}`,
  ]
    .filter((l) => l !== "")
    .join("\n")
}

function Field({ id, label, error, hint, children }: { id: string; label: string; error?: string; hint?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mn-kicker mb-2 block">
        {label}
      </label>
      {children}
      {hint && !error ? <p className="mt-1.5 text-xs text-[var(--mn-text-3)]">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mn-error">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function Options({ name, options, register, error, legend }: { name: FieldPath<FormValues>; options: readonly { value: string; label: string }[]; register: ReturnType<typeof useForm<FormValues>>["register"]; error?: string; legend: string }) {
  return (
    <fieldset>
      <legend className="mn-kicker mb-3">{legend}</legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((o) => (
          <label key={o.value} className="group relative block cursor-pointer">
            <input type="radio" value={o.value} {...register(name)} className="peer sr-only" />
            <span className="flex min-h-[56px] items-center gap-3 rounded-[var(--mn-r-lg)] border border-[var(--mn-border-2)] bg-[var(--mn-surface-2)] px-4 py-3 text-[15px] transition-colors peer-checked:border-[var(--mn-lime)] peer-checked:bg-[var(--mn-lime-10)] peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-[var(--mn-lime)] hover:border-[var(--mn-lime-45)]">
              <span className="grid h-4 w-4 flex-none place-items-center rounded-full border border-[var(--mn-text-3)] group-has-[:checked]:border-[var(--mn-lime)]">
                <span className="h-2 w-2 rounded-full bg-[var(--mn-lime)] opacity-0 group-has-[:checked]:opacity-100" />
              </span>
              {o.label}
            </span>
          </label>
        ))}
      </div>
      {error ? (
        <p role="alert" className="mn-error">
          {error}
        </p>
      ) : null}
    </fieldset>
  )
}

export function DiagnosticoForm() {
  const params = useSearchParams()
  const [step, setStep] = useState(0)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [waUrl, setWaUrl] = useState("")
  const headingRef = useRef<HTMLHeadingElement>(null)

  const {
    register,
    trigger,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), mode: "onTouched", defaultValues: { budget: "" } })

  useEffect(() => {
    const tema = params.get("tema")
    if (!tema) return
    const need = C.topicMap[tema] ?? (C.needs.some((n) => n.value === tema) ? tema : undefined)
    if (need) setValue("need", need)
  }, [params, setValue])

  useEffect(() => {
    headingRef.current?.focus({ preventScroll: true })
  }, [step, status])

  const last = STEP_FIELDS.length - 1

  async function next() {
    const ok = await trigger(STEP_FIELDS[step])
    if (ok) setStep((s) => Math.min(s + 1, last))
  }

  function onSubmit(values: FormValues) {
    const url = buildWhatsAppUrl(buildMessage(values))
    setWaUrl(url)
    window.open(url, "_blank", "noopener,noreferrer")
    setStatus("success")
  }

  function onInvalid() {
    const firstBad = STEP_FIELDS.findIndex((fields) => fields.some((f) => errors[f]))
    if (firstBad >= 0) setStep(firstBad)
  }

  if (status === "success") {
    return (
      <MnCard hl className="!p-[clamp(28px,4vw,56px)]">
        <h2 ref={headingRef} tabIndex={-1} className="mn-h1 outline-none">
          {C.success.title}
        </h2>
        <p className="mn-lead mt-4">{C.success.text}</p>
        <div className="mt-8">
          <Button href={waUrl} arrow>
            {C.success.cta}
          </Button>
        </div>
      </MnCard>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(
        (v) => {
          try {
            onSubmit(v)
          } catch {
            setStatus("error")
          }
        },
        onInvalid,
      )}
      noValidate
    >
      <MnCard className="!p-[clamp(24px,4vw,48px)]">
        <div className="flex items-center justify-between gap-4">
          <p className="mn-kicker" aria-live="polite">
            {C.stepWord} {step + 1} {C.of} {STEP_FIELDS.length} · {C.steps[step]}
          </p>
        </div>
        <div className="mt-4 h-1 overflow-hidden rounded-full bg-[var(--mn-border-2)]" role="progressbar" aria-valuemin={1} aria-valuemax={STEP_FIELDS.length} aria-valuenow={step + 1} aria-label="Progreso">
          <div className="h-full bg-[var(--mn-lime)] transition-[width]" style={{ width: `${((step + 1) / STEP_FIELDS.length) * 100}%` }} />
        </div>

        <h2 ref={headingRef} tabIndex={-1} className="mn-h2 mt-8 outline-none">
          {C.stepTitles[step]}
        </h2>

        <div className="mt-6 space-y-5">
          {step === 0 && <Options name="need" options={C.needs} register={register} error={errors.need?.message} legend={C.fields.need} />}

          {step === 1 && (
            <Field id="details" label={C.fields.details} error={errors.details?.message}>
              <textarea id="details" className="mn-input" placeholder={C.fields.detailsPlaceholder} aria-invalid={!!errors.details} aria-describedby={errors.details ? "details-error" : undefined} {...register("details")} />
            </Field>
          )}

          {step === 2 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label={C.fields.name} error={errors.name?.message}>
                <input id="name" autoComplete="name" className="mn-input" aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} {...register("name")} />
              </Field>
              <Field id="company" label={C.fields.company} error={errors.company?.message}>
                <input id="company" autoComplete="organization" className="mn-input" aria-invalid={!!errors.company} aria-describedby={errors.company ? "company-error" : undefined} {...register("company")} />
              </Field>
              <Field id="sector" label={C.fields.sector} error={errors.sector?.message}>
                <select id="sector" className="mn-input" defaultValue="" aria-invalid={!!errors.sector} aria-describedby={errors.sector ? "sector-error" : undefined} {...register("sector")}>
                  <option value="" disabled>
                    {C.fields.select}
                  </option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="country" label={C.fields.country} error={errors.country?.message}>
                <input id="country" autoComplete="country-name" className="mn-input" aria-invalid={!!errors.country} aria-describedby={errors.country ? "country-error" : undefined} {...register("country")} />
              </Field>
              <div className="sm:col-span-2">
                <Field id="team" label={C.fields.team} error={errors.team?.message}>
                  <select id="team" className="mn-input" defaultValue="" aria-invalid={!!errors.team} aria-describedby={errors.team ? "team-error" : undefined} {...register("team")}>
                    <option value="" disabled>
                      {C.fields.select}
                    </option>
                    {C.teams.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            </div>
          )}

          {step === 3 && <Options name="timeline" options={C.timelines.map((t) => ({ value: t, label: t }))} register={register} error={errors.timeline?.message} legend={C.fields.timeline} />}

          {step === 4 && <Options name="budget" options={C.budgets.map((b) => ({ value: b, label: b }))} register={register} legend={C.fields.budget} />}

          {step === 5 && (
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="email" label={C.fields.email} error={errors.email?.message}>
                <input id="email" type="email" autoComplete="email" inputMode="email" className="mn-input" aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} {...register("email")} />
              </Field>
              <Field id="whatsapp" label={C.fields.whatsapp} error={errors.whatsapp?.message} hint={C.fields.whatsappHint}>
                <input id="whatsapp" type="tel" autoComplete="tel" inputMode="tel" placeholder="+1 809 555 0123" className="mn-input" aria-invalid={!!errors.whatsapp} aria-describedby={errors.whatsapp ? "whatsapp-error" : undefined} {...register("whatsapp")} />
              </Field>
            </div>
          )}
        </div>

        {status === "error" ? (
          <p role="alert" className="mt-6 rounded-[var(--mn-r-lg)] border border-[var(--mn-danger)] bg-[rgba(255,77,77,0.08)] px-4 py-3 text-sm">
            {C.error}
          </p>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-4">
          {step > 0 ? (
            <Button variant="ghost" onClick={() => setStep((s) => s - 1)}>
              {C.back}
            </Button>
          ) : null}
          {step < last ? (
            <Button arrow onClick={next}>
              {C.next}
            </Button>
          ) : (
            <Button type="submit" arrow disabled={isSubmitting} className={cn(isSubmitting && "opacity-70")}>
              {isSubmitting ? C.sending : C.submit}
            </Button>
          )}
        </div>
        {step === last ? <p className="mt-4 text-xs text-[var(--mn-text-3)]">{C.legal}</p> : null}
      </MnCard>
    </form>
  )
}
