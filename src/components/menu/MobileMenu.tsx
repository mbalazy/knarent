import React, { useState } from 'react'
import styled, { css } from 'styled-components'
type MobileMenuProps = {
  hideMenu: boolean
}

const MobileMenuStyles = styled.section<MobileMenuProps>`
  ${({ hideMenu }) =>
    hideMenu &&
    css`
      display: none;
    `}
  position: fixed;
  top: 70px;
  bottom: 0px;
  left: 20px;
  right: 0px;
  background-color: #ffffff99;
`

const MobileMenu = () => {
  const [hideMenu, setHideMenu] = useState(false)
  const handleMenuToggle = () => setHideMenu(!hideMenu)
  return (
    <>
      <button onClick={handleMenuToggle}>X</button>
      <MobileMenuStyles hideMenu={hideMenu}>
        component
        <p>MobileMenu</p>
      </MobileMenuStyles>
    </>
  )
}

export default MobileMenu
