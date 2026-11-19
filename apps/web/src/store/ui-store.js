import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useUiStore = create(
  persist(
    (set) => ({
      locale: 'de',
      cookieConsent: null,
      mobileNavOpen: false,
      setLocale: (locale) => set({ locale }),
      setCookieConsent: (cookieConsent) => set({ cookieConsent }),
      setMobileNavOpen: (mobileNavOpen) => set({ mobileNavOpen }),
    }),
    {
      name: 'abone-ui',
      partialize: (state) => ({
        locale: state.locale,
        cookieConsent: state.cookieConsent,
      }),
    },
  ),
)
