import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold tracking-tight transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-lime text-ink hover:bg-lime-deep shadow-sm',
        secondary: 'bg-white/15 text-white hover:bg-white/25 border border-white/25',
        outline: 'border border-border bg-white text-ink hover:bg-mist',
        navy: 'bg-ink text-white hover:bg-forest',
        ghost: 'hover:bg-black/5 text-ink',
        danger: 'bg-danger text-white hover:brightness-110',
        soft: 'bg-mist text-ink hover:bg-cloud',
      },
      size: {
        default: 'h-11 px-5 py-2',
        sm: 'h-9 px-4 text-xs',
        lg: 'h-12 px-7 text-[15px]',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export function Button({ className, variant, size, asChild = false, ...props }) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />
  )
}

export { buttonVariants }
