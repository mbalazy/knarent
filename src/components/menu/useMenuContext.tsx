import React, { createContext, useContext, useState } from 'react'

type Context = {
  showMobileMenu: boolean
  setShowMobileMenu: (arg0: boolean) => void
}

export const MenuContext = createContext<Context>({
  showMobileMenu: false,
  setShowMobileMenu: () => false,
})

export const useMenu = () => {
  const context = useContext(MenuContext)
  if (context === undefined) {
    throw new Error('useContext must be used within Provider')
  }
  return context
}

export const MenuProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <MenuContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
