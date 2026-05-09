import type { Project } from '@/types'
import plavetLogo from '@/assets/images/plavet-logo.jpg'

export const PROJECTS: Project[] = [
  {
    id: 'farmacia-mch',
    title: 'Farmacia MCH',
    description: 'Sistema de Gestión. Proyecto diseñado para facilitar la administración de farmacias, permitiendo facturación avanzada y control detallado de stock y productos.',
    image: '', // Sin imagen
    stack: ['React', 'NextJS', 'TypeScript'],
    demoUrl: 'https://farmacia-mch-system.vercel.app/login',
    githubUrl: 'https://github.com/Lyscri/farmacia-mch-system',
    featured: true,
  },
  {
    id: 'plavet',
    title: 'PLAVET',
    description: 'Sistema de Gestión de Pasantías y Empleabilidad. Plataforma integral multi-tenant que conecta estudiantes, instituciones y empresas para revolucionar las pasantías.',
    image: plavetLogo,
    stack: ['React', 'NextJS', 'Supabase', 'Multi-tenant'],
    demoUrl: 'https://plavet-mobile.vercel.app/',
    githubUrl: '', // No hay repo
    featured: true,
  },
]
