import styled, { css } from 'styled-components'

type NavProps = {
  sticky?: boolean
}

export const NavWrapper = styled.nav<NavProps>`
  height: ${({ theme }) => theme.dimensions.navbarHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 0 4%;

  ${({ sticky }) =>
    sticky &&
    css`
      position: sticky;
      top: 0;
      z-index: 1000;
    `}

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      padding: 0 4rem;
    }
  `}
`
export const NavInnerWrapper = styled.div`
  height: 100%;
  max-width: 140rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`
export const PhoneWrapper = styled.div`
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
export const DesktopMenuWrapper = styled.div`
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      display: none;
    }
  `}
`
export const MobileMenuWrapper = styled.div`
  ${({ theme: { up, breakpoints } }) => css`
    ${up(breakpoints.l)} {
      display: none;
    }
  `}
`
