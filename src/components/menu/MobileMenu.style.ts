import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

type MobileMenuProps = {
  showMenu: boolean
}
type CloseButtonProps = {
  showCloseIcon: boolean
}

export const MobileMenuTransition = css`
  transition: transform 0.15s ease-in-out;
`

export const MobileMenuWrapper = styled.div`
  ${cardBasicStyle}
  padding: 3rem;
`

export const MobileMenuStyles = styled.section<MobileMenuProps>`
  ${MobileMenuTransition}
  padding: 2rem;
  transform: translateX(100vw);
  position: fixed;
  top: ${({ theme }) => theme.dimensions.navbarHeight};
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: ${({ theme }) => theme.colors.accent2};
  overflow-y: auto;

  display: flex;
  flex-direction: column;

  ${({ showMenu }) =>
    showMenu &&
    css`
      transform: translateX(0);
    `}
`
export const ToggleMenuButton = styled.button`
  ${MobileMenuTransition}
  width: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
`
export const ButtonIcon = styled.div<CloseButtonProps>`
  ${MobileMenuTransition}
  position: relative;
  width: 70%;
  height: 3px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ showCloseIcon }) =>
    showCloseIcon &&
    css`
      background: transparent;
    `}

  &:before,
  &:after {
    ${MobileMenuTransition}
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 4px;
  }
  &:before {
    transform: translateY(-1rem);
    ${({ showCloseIcon }) =>
      showCloseIcon &&
      css`
        transform: rotate(45deg);
      `}
  }
  &:after {
    transform: translateY(1rem);
    ${({ showCloseIcon }) =>
      showCloseIcon &&
      css`
        transform: rotate(-45deg);
      `}
  }
`
