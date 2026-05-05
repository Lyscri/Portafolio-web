import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

export function getCurrentYear(): number {
  return new Date().getFullYear()
}

export function scrollToSection(href: string): void {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  element?.scrollIntoView({ behavior: 'smooth' })
}
