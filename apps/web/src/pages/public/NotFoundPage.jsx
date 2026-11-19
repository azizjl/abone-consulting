import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

export function NotFoundPage() {
  return (
    <div className="gradient-hero flex min-h-[70vh] items-center pt-28 text-white">
      <div className="container-abone py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan">404</p>
        <h1 className="mt-4 text-4xl font-extrabold">Seite nicht gefunden</h1>
        <p className="mt-4 max-w-lg text-white/70">
          Die angeforderte Seite existiert nicht oder wurde verschoben.
        </p>
        <Button asChild className="mt-8">
          <Link to="/">Zur Startseite</Link>
        </Button>
      </div>
    </div>
  )
}
