import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { navItems } from '@/data/site'
import { useUiStore } from '@/store/ui-store'
import { cn } from '@/lib/utils'

export function PublicHeader() {
  const mobileNavOpen = useUiStore((s) => s.mobileNavOpen)
  const setMobileNavOpen = useUiStore((s) => s.setMobileNavOpen)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileNavOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileNavOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-ink/90 text-white shadow-soft backdrop-blur-xl'
          : 'bg-transparent text-white',
      )}
    >
      <div className="container-abone grid h-[4.75rem] grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
        <BrandLogo
          variant="white"
          className="justify-self-start"
          imgClassName="h-11"
          onClick={() => setMobileNavOpen(false)}
        />

        <nav className="hidden items-center gap-1 justify-self-center lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'rounded-full px-3.5 py-2 text-sm font-medium text-white/80 transition hover:text-white',
                  isActive && 'bg-white/12 text-white',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center justify-self-end gap-3 lg:flex">
          <Link
            to="/leistungen"
            className="rounded-full border border-white/25 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
          >
            Leistungen
          </Link>
          <Link
            to="/kontakt"
            className="rounded-full bg-lime px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-lime-deep"
          >
            Kontakt
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-full border border-white/25 lg:hidden"
          aria-label={mobileNavOpen ? 'Menü schließen' : 'Menü öffnen'}
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
        >
          {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileNavOpen ? (
        <div className="border-t border-white/10 bg-ink lg:hidden">
          <div className="container-abone flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-xl px-3 py-3 text-base font-medium text-white/90 hover:bg-white/10"
                onClick={() => setMobileNavOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setMobileNavOpen(false)}
              className="mt-2 rounded-full bg-lime px-5 py-3 text-center text-sm font-semibold text-ink"
            >
              Kontakt
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
