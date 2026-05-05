import { cn } from '@/utils'
import { scrollToSection } from '@/utils'

interface NavLinkProps {
  label: string
  href: string
  isActive?: boolean
  onClick?: () => void
}

export function NavLink({ label, href, isActive = false, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    scrollToSection(href)
    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'relative font-mono text-sm tracking-wide transition-colors duration-300 py-1 group',
        isActive ? 'text-[#E8000D]' : 'text-[#A3A3A3] hover:text-white'
      )}
    >
      {label}
      <span
        className={cn(
          'absolute -bottom-0.5 left-0 h-px bg-[#E8000D] transition-all duration-300',
          isActive ? 'w-full' : 'w-0 group-hover:w-full'
        )}
      />
    </a>
  )
}
