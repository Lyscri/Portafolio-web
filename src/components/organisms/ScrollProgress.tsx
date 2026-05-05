import { useScrollProgress } from '@/hooks/useScrollProgress'

export function ScrollProgress() {
  const { progress } = useScrollProgress()

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-[#1F1F1F]">
      <div
        className="h-full bg-[#E8000D] transition-[width] duration-100 ease-out shadow-[0_0_8px_rgba(232,0,13,0.6)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
