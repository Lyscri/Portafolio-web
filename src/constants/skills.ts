import type { Skill } from '@/types'

export const SKILLS: Skill[] = [
  {
    name: 'TypeScript',
    icon: 'typescript',
    category: 'Language',
    color: '#3178C6',
  },
  {
    name: 'React',
    icon: 'react',
    category: 'Framework',
    color: '#61DAFB',
  },
  {
    name: 'NextJS',
    icon: 'nextdotjs',
    category: 'Framework',
    color: '#FFFFFF',
  },
  {
    name: 'NestJS',
    icon: 'nestjs',
    category: 'Framework',
    color: '#E0234E',
  },
  {
    name: 'HonoJS',
    icon: 'hono',
    category: 'Framework',
    color: '#E36002',
  },
  {
    name: 'PostgreSQL',
    icon: 'postgresql',
    category: 'Database',
    color: '#4169E1',
  },
  {
    name: 'SQL Server',
    icon: 'microsoftsqlserver',
    category: 'Database',
    color: '#CC2927',
  },
  {
    name: 'Node.js',
    icon: 'nodedotjs',
    category: 'Runtime',
    color: '#339933',
  },
]

export const SKILLS_ROW_ONE = SKILLS.slice(0, 4)
export const SKILLS_ROW_TWO = SKILLS.slice(4)
