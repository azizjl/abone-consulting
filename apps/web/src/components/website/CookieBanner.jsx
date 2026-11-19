import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { useUiStore } from '@/store/ui-store'

export function CookieBanner() {
  const consent = useUiStore((s) => s.cookieConsent)
  const setCookieConsent = useUiStore((s) => s.setCookieConsent)

  if (consent) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] p-4">
      <div className="container-abone rounded-[1.5rem] border border-border bg-white p-5 shadow-soft">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-sm text-muted">
            Wir verwenden notwendige Cookies für den Betrieb der Website. Optionale
            Analyse-Cookies setzen wir nur mit Ihrer Einwilligung. Mehr in der{' '}
            <Link to="/datenschutz" className="font-semibold text-ink underline underline-offset-2">
              Datenschutzerklärung
            </Link>
            .
          </p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={() => setCookieConsent('necessary')}>
              Nur notwendige
            </Button>
            <Button onClick={() => setCookieConsent('all')}>Alle akzeptieren</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
