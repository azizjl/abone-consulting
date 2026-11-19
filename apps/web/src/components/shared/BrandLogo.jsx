import { Link } from 'react-router-dom'
import { company } from '@/data/site'
import { cn } from '@/lib/utils'

const VARIANTS = {
  color: '/brand/logo.svg',
  white: '/brand/logo-white.png',
  black: '/brand/logo-black.png',
}

export function BrandLogo({
  variant = 'color',
  className,
  imgClassName,
  to = '/',
  onClick,
  alt = company.name,
}) {
  const src = VARIANTS[variant] || VARIANTS.color

  const image = (
    <img
      src={src}
      alt={alt}
      className={cn('h-10 w-auto object-contain', imgClassName)}
    />
  )

  if (!to) {
    return <span className={cn('inline-flex items-center', className)}>{image}</span>
  }

  return (
    <Link to={to} onClick={onClick} className={cn('inline-flex items-center', className)}>
      {image}
    </Link>
  )
}
