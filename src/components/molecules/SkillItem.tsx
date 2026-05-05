import { Badge } from '@/components/atoms/Badge'
import type { Skill } from '@/types'

interface SkillItemProps {
  skill: Skill
}

export function SkillItem({ skill }: SkillItemProps) {
  const iconUrl = `https://cdn.simpleicons.org/${skill.icon}`

  return (
    <div className="flex items-center gap-3 bg-[#111111] border border-[#1F1F1F] hover:border-[#E8000D] rounded-xl px-5 py-4 transition-all duration-300 hover:shadow-[0_0_20px_rgba(232,0,13,0.15)] min-w-[180px] group card-glow">
      <img
        src={iconUrl}
        alt={skill.name}
        className="w-8 h-8 object-contain"
        style={{ filter: `drop-shadow(0 0 6px ${skill.color}40)` }}
        loading="lazy"
      />
      <div className="flex flex-col gap-1">
        <span className="text-white font-medium text-sm leading-none">
          {skill.name}
        </span>
        <Badge variant="red" className="self-start text-xs">
          {skill.category}
        </Badge>
      </div>
    </div>
  )
}
