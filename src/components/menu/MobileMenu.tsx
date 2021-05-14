import React, { useContext } from 'react'
import CategoryMenu from '../equipment/CategoryMenu'
import Menu from './Menu'
import {
  ButtonIcon,
  MobileMenuStyles,
  MobileMenuWrapper,
  ToggleMenuButton,
} from './MobileMenu.style'
import { MenuContext } from './MobileMenuContext'

const MobileMenu = () => {
  const { showMobileMenu, setShowMobileMenu } = useContext(MenuContext)
  const handleToggleMenu = () => setShowMobileMenu(!showMobileMenu)
  return (
    <>
      <ToggleMenuButton
        onClick={handleToggleMenu}
        aria-expanded={!!showMobileMenu}
        aria-label="pokaż menu"
      >
        <ButtonIcon showCloseIcon={!!showMobileMenu} />
      </ToggleMenuButton>
      <MobileMenuStyles showMenu={!!showMobileMenu}>
        <MobileMenuWrapper>
          <Menu vertical onMobile />
        </MobileMenuWrapper>
        <CategoryMenu onMobile />
      </MobileMenuStyles>
    </>
  )
}

export default MobileMenu
