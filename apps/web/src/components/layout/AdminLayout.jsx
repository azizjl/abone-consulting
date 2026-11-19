import { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { LogOut, Menu, Search } from 'lucide-react'
import { AdminSidebar } from '@/components/layout/AdminSidebar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuthStore } from '@/store/auth-store'
import { isDemoMode } from '@/lib/supabase'

export function AdminLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, loading, initialized, init, logout } = useAuthStore()
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    init()
  }, [init])

  if (!initialized || loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-ivory text-muted">
        Admin wird geladen…
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace state={{ from: location.pathname }} />
  }

  return (
    <div className="flex min-h-screen bg-[#F3F5F7]">
      <div className="hidden md:block">
        <AdminSidebar collapsed={collapsed} />
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-border bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="hidden md:inline-flex"
              onClick={() => setCollapsed((v) => !v)}
              aria-label="Sidebar umschalten"
            >
              <Menu size={18} />
            </Button>
            <div className="relative hidden w-72 sm:block">
              <Search size={16} className="absolute top-1/2 left-3 -translate-y-1/2 text-muted" />
              <Input className="pl-9" placeholder="Suchen… (demnächst global)" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            {isDemoMode ? (
              <span className="rounded-md bg-warning/15 px-2 py-1 text-xs font-semibold text-warning">
                Demo-Modus
              </span>
            ) : null}
            <Link to="/" className="text-sm text-muted hover:text-navy">
              Zur Website
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={async () => {
                await logout()
                navigate('/admin/login')
              }}
            >
              <LogOut size={16} />
              Logout
            </Button>
          </div>
        </header>
        <main className="flex-1 overflow-auto p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
