import React, { createContext, useState } from 'react'

type ContextProps = {
  showMobileMenu: boolean
  setShowMobileMenu: (arg0: boolean) => void
}

export const MenuContext = createContext<Partial<ContextProps>>({})

export const MenuProvider = ({ children }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <MenuContext.Provider value={{ showMobileMenu, setShowMobileMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
