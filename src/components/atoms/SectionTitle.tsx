import { cn } from '@/utils'

interface SectionTitleProps {
  label: string
  title: string
  className?: string
  glitch?: boolean
}

export function SectionTitle({ label, title, className, glitch = false }: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-16', className)}>
      <span className="text-[#E8000D] font-mono text-sm tracking-widest uppercase mb-4 block">
        {label}
      </span>
      {glitch ? (
        <h2
          className="glitch-text text-4xl md:text-5xl font-bold text-white"
          data-text={title}
        >
          {title}
        </h2>
      ) : (
        <h2 className="text-4xl md:text-5xl font-bold text-white">{title}</h2>
      )}
      <div className="w-16 h-0.5 bg-[#E8000D] mx-auto mt-6" />
    </div>
  )
}
