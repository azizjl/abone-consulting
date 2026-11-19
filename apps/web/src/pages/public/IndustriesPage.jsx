import { Link } from 'react-router-dom'
import {
  ArrowUpRight,
  Building2,
  Calculator,
  Cpu,
  HeartPulse,
  Megaphone,
  Network,
  Users,
} from 'lucide-react'
import { PageHero } from '@/components/website/PageHero'
import { ArrowCta } from '@/components/website/ArrowCta'
import { aboutCopy, industryCards } from '@/data/site'

const industryIcons = {
  cpu: Cpu,
  users: Users,
  megaphone: Megaphone,
  calculator: Calculator,
  building: Building2,
  heartPulse: HeartPulse,
}

export function IndustriesPage() {
  return (
    <div className="bg-white">
      <PageHero
        eyebrow="Branchen"
        title="Unsere Branchenschwerpunkte"
        description={aboutCopy.network}
        primaryCta={{ href: '/fur-kunden', label: 'Anfrage senden' }}
        image="/brand/business.jpg"
      />
      <section className="bg-mist py-20 md:py-24">
        <div className="container-abone grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {industryCards.map((industry, index) => {
            const Icon = industryIcons[industry.icon] || Network
            const featured = index === 0
            return (
              <article
                key={industry.slug}
                className={
                  featured
                    ? 'rounded-[2rem] bg-ink p-7 text-white shadow-card'
                    : 'rounded-[2rem] bg-white p-7 shadow-card'
                }
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
                  <Icon size={20} />
                </span>
                <h2 className="mt-8 font-display text-2xl font-bold">{industry.title}</h2>
                <p
                  className={
                    featured
                      ? 'mt-3 text-sm leading-relaxed text-white/65'
                      : 'mt-3 text-sm leading-relaxed text-muted'
                  }
                >
                  {industry.summary}
                </p>
                <Link
                  to="/fur-kunden"
                  className={
                    featured
                      ? 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime'
                      : 'mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink'
                  }
                >
                  Anfrage stellen <ArrowUpRight size={15} />
                </Link>
              </article>
            )
          })}
        </div>
        <div className="container-abone mt-12">
          <ArrowCta to="/kontakt">Kontakt aufnehmen</ArrowCta>
        </div>
      </section>
    </div>
  )
}
