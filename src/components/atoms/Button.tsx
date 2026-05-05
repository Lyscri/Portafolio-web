import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-none',
  {
    variants: {
      variant: {
        primary:
          'bg-[#E8000D] text-white hover:bg-[#FF1A1A] hover:shadow-[0_0_20px_rgba(232,0,13,0.4)] active:scale-95',
        secondary:
          'border border-[#E8000D] text-[#E8000D] hover:bg-[#E8000D] hover:text-white active:scale-95',
        ghost:
          'text-[#A3A3A3] hover:text-white hover:bg-[#1F1F1F] active:scale-95',
        outline:
          'border border-[#1F1F1F] text-white hover:border-[#E8000D] hover:text-[#E8000D] active:scale-95',
      },
      size: {
        sm: 'h-8 px-3 text-sm rounded-md',
        md: 'h-10 px-5 text-sm rounded-lg',
        lg: 'h-12 px-8 text-base rounded-lg',
        icon: 'h-10 w-10 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
