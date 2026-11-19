import { Link } from 'react-router-dom'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { company, navItems } from '@/data/site'

export function PublicFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="container-abone grid gap-10 py-16 md:grid-cols-3">
        <div>
          <BrandLogo variant="white" imgClassName="h-11" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
            Personalberatung für Consulting, Karriereberatung, Coaching und European-Recruiting.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-lime">
            Navigation
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-lime">
            Kontakt
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>{company.legalName}</li>
            <li>
              {company.address.street}
              <br />
              {company.address.city}
              <br />
              {company.address.country}
            </li>
            <li>
              <a href={`tel:${company.phonePl.replace(/\s/g, '')}`} className="hover:text-white">
                {company.phonePl}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="hover:text-white">
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-abone flex flex-col gap-3 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}
          </p>
          <div className="flex gap-4">
            <Link to="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link to="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
