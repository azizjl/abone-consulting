import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Cpu,
  Globe2,
  HeartPulse,
  Megaphone,
  Network,
  Sparkles,
  Users,
} from 'lucide-react'
import { ArrowCta } from '@/components/website/ArrowCta'
import { ContactForm } from '@/components/forms/ContactForm'
import { aboutCopy, company, industryCards } from '@/data/site'

const industryIcons = {
  cpu: Cpu,
  users: Users,
  megaphone: Megaphone,
  calculator: Calculator,
  building: Building2,
  heartPulse: HeartPulse,
}

gsap.registerPlugin(ScrollTrigger)

export function HomePage() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('[data-hero-animate]', {
        y: 24,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: 'power2.out',
      })
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%' },
          y: 28,
          opacity: 0,
          duration: 0.65,
          ease: 'power2.out',
        })
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={rootRef} className="bg-white">
      <section className="relative isolate min-h-[100svh] overflow-hidden text-white">
        <img
          src="/brand/office.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/88 via-ink/55 to-ink/20" />
        <div className="relative container-abone flex min-h-[100svh] flex-col justify-end pb-10 pt-28 md:pb-14 md:pt-32">
          <div className="max-w-3xl">
            <p
              data-hero-animate
              className="font-display text-sm font-semibold tracking-[0.08em] text-lime"
            >
              {company.name}
            </p>
            <h1
              data-hero-animate
              className="mt-4 font-display text-5xl font-extrabold leading-[1.02] text-balance md:text-7xl"
            >
              Ihr Partner für Personalberatung
            </h1>
            <p data-hero-animate className="mt-5 max-w-xl text-lg text-white/75">
              Consulting, Coaching und Connecting — mit nationalem und internationalem
              Netzwerk sowie Direktansprache.
            </p>
            <div data-hero-animate className="mt-8">
              <ArrowCta to="/fur-kunden">Gespräch starten</ArrowCta>
            </div>
          </div>

          <div
            data-hero-animate
            className="mt-14 grid gap-3 sm:grid-cols-3"
          >
            {[
              { label: 'Für Unternehmen', href: '/fur-kunden', icon: BriefcaseBusiness },
              { label: 'Für Bewerber', href: '/fur-bewerber', icon: Users },
              { label: 'Coaching', href: '/coaching', icon: Sparkles },
            ].map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="glass-chip group flex items-center justify-between rounded-full px-5 py-4 transition hover:bg-white/20"
              >
                <span className="inline-flex items-center gap-3 text-sm font-semibold">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-lime text-ink">
                    <item.icon size={16} />
                  </span>
                  {item.label}
                </span>
                <ArrowUpRight
                  size={16}
                  className="opacity-70 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24" data-reveal>
        <div className="container-abone grid gap-5 lg:grid-cols-3">
          <article className="rounded-[2rem] bg-white p-7 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-3">
              <span className="section-label">Über uns</span>
              <Link
                to="/leistungen"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink transition hover:bg-lime"
              >
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight">
              Consulting, Coaching und Connecting
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{aboutCopy.intro}</p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem]">
              <img
                src="/brand/business.jpg"
                alt="Zusammenarbeit"
                className="h-48 w-full object-cover"
              />
            </div>
          </article>

          <article className="rounded-[2rem] bg-lime p-7 text-ink shadow-card md:p-8">
            <span className="section-label bg-ink/10 text-ink/70">Netzwerk</span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight">
              International verbunden, lokal stark
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink/75">{aboutCopy.network}</p>
            <p className="mt-8 font-display text-4xl font-extrabold">60%+</p>
            <p className="mt-2 text-sm text-ink/70">
              Kunden und Kandidaten mit internationalem Hintergrund
            </p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem]">
              <img
                src="/brand/graphic-network.webp"
                alt="Internationales Netzwerk"
                className="h-40 w-full object-cover"
              />
            </div>
          </article>

          <article className="rounded-[2rem] bg-white p-7 shadow-card md:p-8">
            <div className="flex items-start justify-between gap-3">
              <span className="section-label">Ansatz</span>
              <Link
                to="/fur-bewerber"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink transition hover:bg-lime"
              >
                <ArrowUpRight size={16} />
              </Link>
            </div>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight">
              Nachhaltig und auf Augenhöhe
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">{aboutCopy.approach}</p>
            <div className="mt-8 overflow-hidden rounded-[1.5rem]">
              <img
                src="/brand/candidates.jpg"
                alt="Karriereberatung"
                className="h-48 w-full object-cover"
              />
            </div>
          </article>
        </div>
      </section>

      <section className="py-20 md:py-24" data-reveal>
        <div className="container-abone text-center">
          <span className="section-label">Leistungen</span>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-tight md:text-5xl">
            Wir bringen die richtigen Menschen und Unternehmen zusammen
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Für Unternehmen und Bewerber — Recruiting, Karriereberatung und Coaching aus einer
            Hand.
          </p>
        </div>

        <div className="container-abone mt-12 grid gap-5 md:grid-cols-3">
          {[
            {
              title: 'Personalberatung',
              text: 'Fach- und Führungspositionen über Netzwerk und Direktansprache besetzen.',
              href: '/fur-kunden',
              image: '/brand/business.jpg',
              icon: Network,
            },
            {
              title: 'Karriere & Bewerbung',
              text: 'Unverbindliche Begleitung von der Bewerbung bis zur Vermittlung.',
              href: '/fur-bewerber',
              image: '/brand/candidates.jpg',
              icon: Users,
            },
            {
              title: 'Coaching',
              text: 'Zielsetzung, Bewerbungs-Check und Interviewtraining mit klaren Modulen.',
              href: '/coaching',
              image: '/brand/coaching.jpg',
              icon: Sparkles,
            },
          ].map((item) => (
            <Link
              key={item.title}
              to={item.href}
              className="group relative isolate min-h-[360px] overflow-hidden rounded-[2rem]"
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/35 to-ink/10" />
              <div className="relative flex h-full flex-col justify-between p-6 text-white">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
                  <item.icon size={18} />
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.text}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24" data-reveal>
        <div className="container-abone">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <span className="section-label">Branchen</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">
                Spezialisierte Beratung in klaren Berufsfeldern
              </h2>
              <p className="mt-4 text-muted">{aboutCopy.sustainability}</p>
            </div>
            <ArrowCta to="/branchen" tone="dark">
              Alle Branchen
            </ArrowCta>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((industry, index) => {
              const Icon = industryIcons[industry.icon] || Network
              const featured = index === 0
              return (
                <Link
                  key={industry.slug}
                  to="/branchen"
                  className={
                    featured
                      ? 'group relative overflow-hidden rounded-[2rem] bg-ink p-7 text-white shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:col-span-2 xl:col-span-1'
                      : 'group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft'
                  }
                >
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={
                        featured
                          ? 'inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink'
                          : 'inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink'
                      }
                    >
                      <Icon size={20} />
                    </span>
                    <span
                      className={
                        featured
                          ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 transition group-hover:border-lime group-hover:bg-lime group-hover:text-ink'
                          : 'inline-flex h-10 w-10 items-center justify-center rounded-full bg-mist text-ink/50 transition group-hover:bg-lime group-hover:text-ink'
                      }
                    >
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3
                    className={
                      featured
                        ? 'mt-8 font-display text-2xl font-bold'
                        : 'mt-8 font-display text-2xl font-bold text-ink'
                    }
                  >
                    {industry.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? 'mt-3 text-sm leading-relaxed text-white/65'
                        : 'mt-3 text-sm leading-relaxed text-muted'
                    }
                  >
                    {industry.summary}
                  </p>
                  <div
                    className={
                      featured
                        ? 'pointer-events-none absolute -right-8 -bottom-10 h-36 w-36 rounded-full bg-lime/15 blur-2xl'
                        : 'pointer-events-none absolute -right-10 -bottom-12 h-32 w-32 rounded-full bg-lime/30 opacity-0 blur-2xl transition group-hover:opacity-100'
                    }
                  />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" data-reveal>
        <div className="container-abone grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Globe2,
              title: 'European Recruiting',
              text: company.claimInternational,
            },
            {
              icon: Network,
              title: 'Direktansprache',
              text: 'Gezielte Ansprache passender Talente über unser gepflegtes Netzwerk.',
            },
            {
              icon: Users,
              title: 'Langfristige Partnerschaft',
              text: 'Wir arbeiten effizient, nachhaltig und auf Augenhöhe mit beiden Seiten.',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-border bg-white p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-lime text-ink">
                <item.icon size={18} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-10" data-reveal>
        <div className="container-abone overflow-hidden rounded-[2rem] bg-ink px-8 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-extrabold md:text-4xl">
                Personalbedarf? Lassen Sie uns sprechen.
              </h2>
              <p className="mt-4 max-w-xl text-white/65">
                Unternehmen erreichen uns für Vakanzen, Bewerber für Karrierewege und Coaching.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <ArrowCta to="/kontakt">Kontakt aufnehmen</ArrowCta>
              <Link
                to="/job-finden"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Stellen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 md:py-24" data-reveal>
        <div className="container-abone grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <span className="section-label">Kontakt</span>
            <h2 className="mt-5 font-display text-4xl font-extrabold">Schreiben Sie uns</h2>
            <p className="mt-4 text-muted">Wir melden uns persönlich zurück.</p>
            <div className="mt-8 space-y-2 text-sm text-ink">
              <p className="font-semibold">{company.legalName}</p>
              <p>
                {company.address.street}, {company.address.city}
              </p>
              <p>
                <a className="underline decoration-lime underline-offset-4" href={`tel:${company.phonePl.replace(/\s/g, '')}`}>
                  {company.phonePl}
                </a>
              </p>
              <p>
                <a className="underline decoration-lime underline-offset-4" href={`mailto:${company.email}`}>
                  {company.email}
                </a>
              </p>
            </div>
          </div>
          <ContactForm type="general" sourcePage="/" />
        </div>
      </section>
    </div>
  )
}
