import React, { useContext } from 'react'
import CategoryMenu from '../equipment/CategoryMenu'
import Menu from './Menu'
import {
  ButtonStyles,
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
      <ToggleMenuButton onClick={handleToggleMenu}>
        <ButtonStyles showCloseIcon={!!showMobileMenu} />
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
