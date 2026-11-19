import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useParams } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { PublicLayout } from '@/components/layout/PublicLayout'
import { AdminLayout } from '@/components/layout/AdminLayout'
import { ScrollToTop } from '@/components/shared/ScrollToTop'
import { useAuthStore } from '@/store/auth-store'

const HomePage = lazy(() =>
  import('@/pages/public/HomePage').then((m) => ({ default: m.HomePage })),
)
const CandidatesPage = lazy(() =>
  import('@/pages/public/CandidatesPage').then((m) => ({ default: m.CandidatesPage })),
)
const CustomersPage = lazy(() =>
  import('@/pages/public/CustomersPage').then((m) => ({ default: m.CustomersPage })),
)
const ContactPage = lazy(() =>
  import('@/pages/public/ContactPage').then((m) => ({ default: m.ContactPage })),
)
const CoachingPage = lazy(() =>
  import('@/pages/public/CoachingPage').then((m) => ({ default: m.CoachingPage })),
)
const JobsPage = lazy(() =>
  import('@/pages/public/JobsPage').then((m) => ({ default: m.JobsPage })),
)
const JobDetailPage = lazy(() =>
  import('@/pages/public/JobDetailPage').then((m) => ({ default: m.JobDetailPage })),
)
const ServicesPage = lazy(() =>
  import('@/pages/public/ServicesPage').then((m) => ({ default: m.ServicesPage })),
)
const ImpressumPage = lazy(() =>
  import('@/pages/public/ImpressumPage').then((m) => ({ default: m.ImpressumPage })),
)
const PrivacyPage = lazy(() =>
  import('@/pages/public/PrivacyPage').then((m) => ({ default: m.PrivacyPage })),
)
const NotFoundPage = lazy(() =>
  import('@/pages/public/NotFoundPage').then((m) => ({ default: m.NotFoundPage })),
)

const LoginPage = lazy(() =>
  import('@/pages/admin/LoginPage').then((m) => ({ default: m.LoginPage })),
)
const DashboardPage = lazy(() =>
  import('@/pages/admin/DashboardPage').then((m) => ({ default: m.DashboardPage })),
)
const modules = () => import('@/pages/admin/modulePages')

const CandidatesAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.CandidatesAdminPage })),
)
const JobsAdminPage = lazy(() => modules().then((m) => ({ default: m.JobsAdminPage })))
const ApplicationsAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.ApplicationsAdminPage })),
)
const PipelineAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.PipelineAdminPage })),
)
const CompaniesAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.CompaniesAdminPage })),
)
const ContactsAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.ContactsAdminPage })),
)
const LeadsAdminPage = lazy(() => modules().then((m) => ({ default: m.LeadsAdminPage })))
const InboxAdminPage = lazy(() => modules().then((m) => ({ default: m.InboxAdminPage })))
const TasksAdminPage = lazy(() => modules().then((m) => ({ default: m.TasksAdminPage })))
const CalendarAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.CalendarAdminPage })),
)
const CmsPagesAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.CmsPagesAdminPage })),
)
const MediaAdminPage = lazy(() => modules().then((m) => ({ default: m.MediaAdminPage })))
const SettingsAdminPage = lazy(() =>
  modules().then((m) => ({ default: m.SettingsAdminPage })),
)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30_000,
      retry: 1,
    },
  },
})

function PageLoader() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-muted">
      Wird geladen…
    </div>
  )
}

function JobAngeboteRedirect() {
  const { slug } = useParams()
  return <Navigate to={`/job-finden/${slug}`} replace />
}

const IndustriesPage = lazy(() =>
  import('@/pages/public/IndustriesPage').then((m) => ({ default: m.IndustriesPage })),
)

export default function App() {
  const init = useAuthStore((s) => s.init)

  useEffect(() => {
    init()
  }, [init])

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route element={<PublicLayout />}>
              <Route index element={<HomePage />} />
              <Route path="fur-bewerber" element={<CandidatesPage />} />
              <Route path="fur-kunden" element={<CustomersPage />} />
              <Route path="kontakt" element={<ContactPage />} />
              <Route path="coaching" element={<CoachingPage />} />
              <Route path="job-finden" element={<JobsPage />} />
              <Route path="job-finden/:slug" element={<JobDetailPage />} />
              <Route path="job-angebote/:slug" element={<JobAngeboteRedirect />} />
              <Route path="leistungen" element={<ServicesPage />} />
              <Route path="branchen" element={<IndustriesPage />} />
              <Route path="impressum" element={<ImpressumPage />} />
              <Route path="datenschutz" element={<PrivacyPage />} />
              <Route path="datechutz" element={<Navigate to="/datenschutz" replace />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>

            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="candidates" element={<CandidatesAdminPage />} />
              <Route path="applications" element={<ApplicationsAdminPage />} />
              <Route path="jobs" element={<JobsAdminPage />} />
              <Route path="pipeline" element={<PipelineAdminPage />} />
              <Route path="companies" element={<CompaniesAdminPage />} />
              <Route path="contacts" element={<ContactsAdminPage />} />
              <Route path="leads" element={<LeadsAdminPage />} />
              <Route path="inbox" element={<InboxAdminPage />} />
              <Route path="tasks" element={<TasksAdminPage />} />
              <Route path="calendar" element={<CalendarAdminPage />} />
              <Route path="cms/pages" element={<CmsPagesAdminPage />} />
              <Route path="cms/media" element={<MediaAdminPage />} />
              <Route path="settings" element={<SettingsAdminPage />} />
            </Route>
          </Routes>
        </Suspense>
        <Toaster richColors position="top-right" />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
