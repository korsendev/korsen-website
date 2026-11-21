import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Separa la última palabra de un título para pintarla en lima (máx. una por titular). */
export function splitAccent(title: string): { title: string; accent: string } {
  const i = title.lastIndexOf(" ")
  if (i < 0) return { title: "", accent: title }
  return { title: title.slice(0, i), accent: title.slice(i + 1) }
}
