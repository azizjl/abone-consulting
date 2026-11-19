import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ArrowCta({
  to,
  children,
  className,
  tone = 'lime',
}) {
  const tones = {
    lime: 'bg-lime text-ink hover:bg-lime-deep',
    dark: 'bg-ink text-white hover:bg-forest',
    white: 'bg-white text-ink hover:bg-mist',
  }

  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-2 rounded-full pl-5 pr-1.5 py-1.5 text-sm font-semibold tracking-tight transition',
        tones[tone],
        className,
      )}
    >
      <span>{children}</span>
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white transition group-hover:rotate-45">
        <ArrowUpRight size={16} />
      </span>
    </Link>
  )
}
