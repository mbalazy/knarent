import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import MenuItem from './MenuItem'
import { MenuContext } from './MobileMenuContext'

type MenuProps = {
  vertical?: boolean
  onMobile?: boolean
}

const MenuStyles = styled.ul<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 4rem;
  white-space: nowrap;
  gap: 4rem;

  ${({ vertical }) =>
    vertical &&
    css`
      display: grid;
      width: auto;
      margin: 0;
      gap: 2rem;
    `}
`

const Menu = ({ vertical, onMobile }: MenuProps) => {
  const { menuItemList } = CONSTS
  const { setShowMobileMenu } = useContext(MenuContext)
  const handleCloseMenu = () => onMobile && setShowMobileMenu(false)
  return (
    <MenuStyles vertical={vertical}>
      {menuItemList.map((menuItem) => (
        <MenuItem item={menuItem} key={menuItem.label} onClick={handleCloseMenu} />
      ))}
    </MenuStyles>
  )
}

export default Menu
