import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef(function Input(
  { className, type = 'text', ...props },
  ref,
) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-12 w-full rounded-2xl border border-border bg-white px-4 py-2 text-sm text-ink placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
