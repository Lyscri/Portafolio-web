import { motion } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import type { Metric } from '@/types'

interface MetricCardProps {
  metric: Metric
  isVisible: boolean
  index: number
}

export function MetricCard({ metric, isVisible, index }: MetricCardProps) {
  const count = useCounter(metric.value, isVisible)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="text-center p-6 bg-[#111111] border border-[#1F1F1F] rounded-2xl"
    >
      <div className="text-4xl font-bold text-[#E8000D] font-mono mb-2">
        {count}{metric.suffix}
      </div>
      <div className="text-[#A3A3A3] text-sm">{metric.label}</div>
    </motion.div>
  )
}
