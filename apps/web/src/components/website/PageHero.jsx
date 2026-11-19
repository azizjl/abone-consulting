import { ArrowCta } from '@/components/website/ArrowCta'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  image = '/brand/office.jpg',
  imageAlt = '',
}) {
  return (
    <section className="relative isolate min-h-[68vh] overflow-hidden text-white">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
      <div className="relative container-abone flex min-h-[68vh] flex-col justify-end pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="max-w-3xl">
          {eyebrow ? <span className="section-label bg-white/12 text-white/80">{eyebrow}</span> : null}
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-balance md:text-6xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
              {description}
            </p>
          ) : null}
          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {primaryCta ? <ArrowCta to={primaryCta.href}>{primaryCta.label}</ArrowCta> : null}
              {secondaryCta ? (
                <Button asChild variant="secondary" size="lg">
                  <Link to={secondaryCta.href}>{secondaryCta.label}</Link>
                </Button>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
