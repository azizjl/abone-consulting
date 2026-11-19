import { demoJobs } from '@/data/demo'
import { isDemoMode, isSupabaseConfigured, supabase } from '@/lib/supabase'

export async function listJobs(filters = {}) {
  let jobs = []

  if (isDemoMode || !isSupabaseConfigured) {
    jobs = demoJobs.filter((j) => j.status === 'published')
  } else {
    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .eq('status', 'published')
      .is('deleted_at', null)
      .order('published_at', { ascending: false })
    if (error) throw error
    jobs = data || []
  }

  return jobs.filter((job) => {
    if (filters.q) {
      const q = filters.q.toLowerCase()
      const hay = `${job.title} ${job.summary || ''} ${job.location || ''}`.toLowerCase()
      if (!hay.includes(q)) return false
    }
    if (filters.location && filters.location !== 'all') {
      if (!(job.location || '').toLowerCase().includes(filters.location.toLowerCase())) {
        return false
      }
    }
    if (filters.industry && filters.industry !== 'all') {
      if ((job.industry || '') !== filters.industry) return false
    }
    if (filters.employmentType && filters.employmentType !== 'all') {
      if ((job.employmentType || job.employment_type || '') !== filters.employmentType) {
        return false
      }
    }
    return true
  })
}

export async function getJobBySlug(slug) {
  const jobs = await listJobs()
  return jobs.find((j) => j.slug === slug) || null
}
