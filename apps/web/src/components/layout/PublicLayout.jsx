import { Outlet } from 'react-router-dom'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { CookieBanner } from '@/components/website/CookieBanner'

export function PublicLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <PublicHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <PublicFooter />
      <CookieBanner />
    </div>
  )
}
