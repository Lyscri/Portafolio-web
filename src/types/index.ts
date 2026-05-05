export interface Project {
  id: string
  title: string
  description: string
  image: string
  stack: string[]
  demoUrl: string
  githubUrl: string
  featured: boolean
}

export interface Skill {
  name: string
  icon: string
  category: 'Framework' | 'Language' | 'Database' | 'Runtime'
  color: string
}

export interface SocialLink {
  label: string
  href: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface Metric {
  value: number
  label: string
  suffix: string
}
