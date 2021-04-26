import { Link } from 'gatsby'
import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as Logo } from '../../images/logo_knarent.svg'
import { ReactComponent as Phone } from '../../images/phone1.svg'
import CONSTS from '../../theme/CONSTS'
import Menu from './menu/Menu'
import MobileMenu from './menu/MobileMenu'

type NavProps = {
  sticky?: boolean
}

const NavWrapper = styled.nav<NavProps>`
  height: ${({ theme }) => theme.dimensions.navbarHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 4%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 1000;
    `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      padding: 0 5rem;
    }
  `}
`
const PhoneWrapperStyles = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  white-space: nowrap;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      display: none;
    }
  `}
`
const DesktopMenuStyles = styled.div`
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      display: none;
    }
  `}
`
const MobileMenuWrapper = styled.div`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      display: none;
    }
  `}
`

const Navbar = ({ sticky }: NavProps) => {
  const [firstPhoneNumber] = CONSTS.telephones
  return (
    <NavWrapper sticky={sticky}>
      <Link to="/">
        <Logo />
      </Link>
      <DesktopMenuStyles>
        <Menu />
      </DesktopMenuStyles>
      <PhoneWrapperStyles>
        <Phone />
        {firstPhoneNumber}
      </PhoneWrapperStyles>
      <MobileMenuWrapper>
        <MobileMenu />
      </MobileMenuWrapper>
    </NavWrapper>
  )
}

export default Navbar
