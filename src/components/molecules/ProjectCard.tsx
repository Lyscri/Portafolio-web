import { ExternalLink } from 'lucide-react'
import { Badge } from '@/components/atoms/Badge'
import { Button } from '@/components/atoms/Button'
import { SocialIcon } from '@/components/atoms/SocialIcon'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

const isPlaceholderImage = (src: string) => !src || src.startsWith('REEMPLAZA')

export function ProjectCard({ project, index }: ProjectCardProps) {
  const revealRef = useScrollReveal({
    origin: 'bottom',
    delay: (index % 3) * 150,
    distance: '20px',
    scale: 0.98
  })

  return (
    <div
      ref={revealRef as React.RefObject<HTMLDivElement>}
      className="bg-[#111111] border border-[#1F1F1F] rounded-2xl overflow-hidden group hover:border-[#E8000D]/50 transition-all duration-300 card-glow min-h-[420px] flex flex-col"
    >
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-[#0A0A0A] mb-4">
        {isPlaceholderImage(project.image) ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-4">
            <div className="w-12 h-12 rounded-full bg-[#E8000D]/10 border border-[#E8000D]/30 flex items-center justify-center">
              <SocialIcon name="github" className="w-6 h-6 text-[#E8000D]" />
            </div>
            <p className="text-[#A3A3A3] text-xs font-mono uppercase tracking-widest">
              Preview no disponible
            </p>
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {/* Red overlay on hover */}
        <div className="absolute inset-0 bg-[#E8000D]/0 group-hover:bg-[#E8000D]/10 transition-all duration-300 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            <Button size="sm" variant="primary">
              <ExternalLink className="w-4 h-4" />
              Demo
            </Button>
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button size="sm" variant="secondary">
                <SocialIcon name="github" className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col gap-4 flex-1 mt-4">
        <h3 className="text-white font-semibold text-lg leading-snug">
          {project.title}
        </h3>
        <p className="text-[#A3A3A3] text-sm leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map(tech => (
            <Badge key={tech} variant="tech">{tech}</Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="primary" size="sm" className="w-full">
              <ExternalLink className="w-4 h-4" />
              Ver demo
            </Button>
          </a>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <SocialIcon name="github" className="w-4 h-4" />
                GitHub
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

