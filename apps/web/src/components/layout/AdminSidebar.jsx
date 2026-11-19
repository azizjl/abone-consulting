import { NavLink } from 'react-router-dom'
import {
  Building2,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardList,
  Inbox,
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  KanbanSquare,
  ChartColumnIncreasing,
  Image,
  Contact,
} from 'lucide-react'
import { BrandLogo } from '@/components/shared/BrandLogo'
import { cn } from '@/lib/utils'

const sections = [
  {
    title: 'Übersicht',
    items: [{ to: '/admin', label: 'Dashboard', icon: LayoutDashboard, end: true }],
  },
  {
    title: 'Recruiting',
    items: [
      { to: '/admin/candidates', label: 'Kandidaten', icon: Users },
      { to: '/admin/applications', label: 'Bewerbungen', icon: ClipboardList },
      { to: '/admin/jobs', label: 'Stellen', icon: BriefcaseBusiness },
      { to: '/admin/pipeline', label: 'Pipeline', icon: KanbanSquare },
    ],
  },
  {
    title: 'Business CRM',
    items: [
      { to: '/admin/companies', label: 'Unternehmen', icon: Building2 },
      { to: '/admin/contacts', label: 'Kontakte', icon: Contact },
      { to: '/admin/leads', label: 'Leads', icon: ChartColumnIncreasing },
      { to: '/admin/inbox', label: 'Inbox', icon: Inbox },
    ],
  },
  {
    title: 'Betrieb',
    items: [
      { to: '/admin/tasks', label: 'Aufgaben', icon: ClipboardList },
      { to: '/admin/calendar', label: 'Kalender', icon: CalendarDays },
    ],
  },
  {
    title: 'Website',
    items: [
      { to: '/admin/cms/pages', label: 'Seiten', icon: FileText },
      { to: '/admin/cms/media', label: 'Medien', icon: Image },
      { to: '/admin/settings', label: 'Einstellungen', icon: Settings },
    ],
  },
]

export function AdminSidebar({ collapsed = false }) {
  return (
    <aside
      className={cn(
        'flex h-full flex-col border-r border-white/10 bg-charcoal text-white',
        collapsed ? 'w-[76px]' : 'w-64',
      )}
    >
      <div className="border-b border-white/10 px-4 py-4">
        <BrandLogo
          variant="white"
          to="/admin"
          imgClassName={collapsed ? 'h-8' : 'h-10'}
        />
        {!collapsed ? (
          <p className="mt-3 text-xs uppercase tracking-[0.16em] text-white/50">Admin</p>
        ) : null}
      </div>
      <nav className="flex-1 overflow-y-auto px-2 py-4">
        {sections.map((section) => (
          <div key={section.title} className="mb-5">
            {!collapsed ? (
              <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">
                {section.title}
              </p>
            ) : null}
            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center gap-3 rounded-md px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white',
                      isActive && 'bg-white/12 text-white',
                    )
                  }
                  title={item.label}
                >
                  <item.icon size={18} />
                  {!collapsed ? <span>{item.label}</span> : null}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  )
}
