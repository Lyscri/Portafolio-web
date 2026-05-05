import type { NavLink, SocialLink, Metric } from '@/types'

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Lyscri',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/felix-felipe00',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:felixrafaelff1109@gmail.com',
    icon: 'mail',
  },
  {
    label: 'Twitter / X',
    href: 'https://x.com/lyscriLix',
    icon: 'twitter',
  },
]

export const METRICS: Metric[] = [
  { value: 3, label: 'Años de experiencia', suffix: '+' },
  { value: 20, label: 'Proyectos completados', suffix: '+' },
  { value: 8, label: 'Tecnologías dominadas', suffix: '' },
]

export const TERMINAL_SEQUENCE = [
  { prompt: '> whoami', output: 'Felix Felipe' },
  {
    prompt: '> cat about.txt',
    output: 'Full Stack Developer\n📍 Santiago de los Caballeros, Rep. Dom.',
  },
  {
    prompt: '> skills --list',
    output: 'TypeScript | HonoJS | React | NextJS | NestJS | PostgreSQL | SQL Server',
  },
  {
    prompt: '> status',
    output: '✓ Disponible para nuevos proyectos',
  },
]
