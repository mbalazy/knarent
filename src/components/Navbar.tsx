import { Link } from 'gatsby'
import React, { useContext } from 'react'
import { ReactComponent as Logo } from '../../images/logo_knarent.svg'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import CONSTS from '../../theme/CONSTS'
import Menu from './menu/Menu'
import MobileMenu from './menu/MobileMenu'
import { MenuContext } from './menu/MobileMenuContext'
import {
  DesktopMenuWrapper,
  MobileMenuWrapper,
  NavInnerWrapper,
  NavWrapper,
  PhoneWrapper,
} from './Navbar.style'

type NavProps = {
  sticky?: boolean
}

const Navbar = ({ sticky }: NavProps) => {
  const { setShowMobileMenu } = useContext(MenuContext)
  const handleCloseMenu = () => setShowMobileMenu(false)
  const [firstPhoneNumber] = CONSTS.telephones
  return (
    <NavWrapper sticky={!!sticky}>
      <NavInnerWrapper>
        <Link to="/" style={{ display: 'flex' }} onClick={handleCloseMenu}>
          <Logo />
        </Link>
        <DesktopMenuWrapper>
          <Menu />
        </DesktopMenuWrapper>
        <PhoneWrapper>
          <Phone />
          {firstPhoneNumber}
        </PhoneWrapper>
        <MobileMenuWrapper>
          <MobileMenu />
        </MobileMenuWrapper>
      </NavInnerWrapper>
    </NavWrapper>
  )
}

export default Navbar
