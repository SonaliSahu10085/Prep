import { create } from 'zustand'

type Store = {
  theme: string
  setTheme: (newTheme: string) => void

  isAuthenticatedUser: boolean
  setIsAuthenticatedUser: (value: boolean) => void

  loading: boolean
  setLoading: (value: boolean) => void

  isNavOpen: boolean
  setNavOpen: (value: boolean) => void
}

export const useStore = create<Store>()((set) => ({
  theme: "light",
  setTheme: (newTheme) => set({ theme: newTheme }),

  isAuthenticatedUser: false,
  setIsAuthenticatedUser: (value) => set({ isAuthenticatedUser: value }),

  loading: false,
  setLoading: (value) => set({ loading: value }),
  
  isNavOpen: false,
  setNavOpen: (value) => set({isNavOpen: value})

}))
