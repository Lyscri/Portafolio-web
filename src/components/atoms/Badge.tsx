import type { HTMLAttributes } from 'react'
import { cn } from '@/utils'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'red' | 'outline' | 'tech'
}

export function Badge({ className, variant = 'default', ...props }: BadgeProps) {
  const variants = {
    default: 'bg-[#1F1F1F] text-[#A3A3A3] border border-[#1F1F1F]',
    red: 'bg-[#E8000D]/10 text-[#E8000D] border border-[#E8000D]/30',
    outline: 'border border-[#1F1F1F] text-[#A3A3A3]',
    tech: 'bg-[#111111] text-white border border-[#1F1F1F] hover:border-[#E8000D] transition-colors duration-300',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium font-mono',
        variants[variant],
        className
      )}
      {...props}
    />
  )
}
