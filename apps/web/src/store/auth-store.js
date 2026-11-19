import { create } from 'zustand'
import { isDemoMode, supabase } from '@/lib/supabase'

export const useAuthStore = create((set, get) => ({
  user: null,
  profile: null,
  loading: true,
  initialized: false,

  init: async () => {
    if (get().initialized) return
    if (isDemoMode || !supabase) {
      set({ loading: false, initialized: true, user: null, profile: null })
      return
    }

    const { data } = await supabase.auth.getSession()
    const user = data.session?.user ?? null
    set({ user, loading: false, initialized: true })

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ user: session?.user ?? null })
    })
  },

  login: async (email, password) => {
    if (isDemoMode || !supabase) {
      const demoUser = {
        id: 'demo-admin',
        email,
        user_metadata: { full_name: 'Demo Admin' },
      }
      set({
        user: demoUser,
        profile: { role: 'owner', full_name: 'Demo Admin' },
      })
      return { user: demoUser }
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    if (error) throw error
    set({ user: data.user })
    return data
  },

  logout: async () => {
    if (!isDemoMode && supabase) {
      await supabase.auth.signOut()
    }
    set({ user: null, profile: null })
  },
}))
