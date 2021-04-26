import React, { useState } from 'react'
import styled, { css } from 'styled-components'
type MobileMenuProps = {
  showMenu: boolean
}
type CloseButtonProps = {
  showCloseIcon: boolean
}

const MobileMenuTransition = css`
  transition: transform 0.15s ease-in-out;
`

const MobileMenuStyles = styled.section<MobileMenuProps>`
  transform: translateX(100vw);
  position: fixed;
  top: ${({ theme }) => theme.dimensions.navbarHeight};
  bottom: 0px;
  left: 10%;
  right: 0px;
  border-radius: 10px;
  background-color: hsla(0, 100%, 100%, 0.97);
  ${({ showMenu }) =>
    showMenu &&
    css`
      transform: translateX(0);
    `}
  ${MobileMenuTransition}
`
const ToggleMenuButton = styled.button`
  width: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  ${MobileMenuTransition}
`
const ButtonStyles = styled.div<CloseButtonProps>`
  position: relative;
  width: 80%;
  height: 4px;
  background: ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  ${MobileMenuTransition}

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
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.black};
    border-radius: 4px;
    ${MobileMenuTransition}
  }
  &:before {
    transform: translateY(-12px);
    ${({ showCloseIcon }) =>
      showCloseIcon &&
      css`
        transform: rotate(45deg);
      `}
  }
  &:after {
    transform: translateY(12px);
    ${({ showCloseIcon }) =>
      showCloseIcon &&
      css`
        transform: rotate(-45deg);
      `}
  }
`

const MobileMenu = () => {
  const [showMenu, setShowMenu] = useState(false)
  const handleToggleMenu = () => setShowMenu(!showMenu)
  return (
    <>
      <ToggleMenuButton onClick={handleToggleMenu}>
        <ButtonStyles showCloseIcon={showMenu} />
      </ToggleMenuButton>
      <MobileMenuStyles showMenu={showMenu}>
        component
        <p>MobileMenu</p>
      </MobileMenuStyles>
    </>
  )
}

export default MobileMenu
