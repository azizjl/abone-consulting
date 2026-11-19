import { useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuthStore } from '@/store/auth-store'
import { isDemoMode } from '@/lib/supabase'

export function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { user, login, init, initialized } = useAuthStore()
  const [email, setEmail] = useState('admin@abone-consulting.eu')
  const [password, setPassword] = useState('demo-admin')
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    init()
  }, [init])

  if (initialized && user) {
    return <Navigate to={location.state?.from || '/admin'} replace />
  }

  async function onSubmit(event) {
    event.preventDefault()
    setSubmitting(true)
    try {
      await login(email, password)
      toast.success('Erfolgreich angemeldet')
      navigate(location.state?.from || '/admin')
    } catch (error) {
      toast.error(error.message || 'Login fehlgeschlagen')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="gradient-hero flex min-h-screen items-center justify-center px-4 py-10 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/95 p-8 text-ink shadow-soft">
        <BrandLogo variant="color" to={null} imgClassName="h-12" />
        <h1 className="mt-6 text-2xl font-extrabold text-navy">Admin Login</h1>
        <p className="mt-2 text-sm text-muted">
          {isDemoMode
            ? 'Supabase ist noch nicht konfiguriert — Demo-Login akzeptiert beliebige Zugangsdaten.'
            : 'Melden Sie sich mit Ihrem Team-Konto an.'}
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="email">E-Mail</Label>
            <Input
              id="email"
              type="email"
              className="mt-1.5"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor="password">Passwort</Label>
            <Input
              id="password"
              type="password"
              className="mt-1.5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={submitting}>
            {submitting ? 'Anmelden…' : 'Anmelden'}
          </Button>
        </form>
        <p className="mt-6 text-center text-sm text-muted">
          <Link to="/" className="underline">
            Zurück zur Website
          </Link>
        </p>
      </div>
    </div>
  )
}
