import React from 'react'
import styled, { css } from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import MenuItem from './MenuItem'

type MenuProps = {
  vertical?: boolean
}

const MenuStyles = styled.ul<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  margin: 0 4rem;
  white-space: nowrap;

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
      width: auto;
      margin: 0;
      gap: 2rem;
    `}
`

const Menu = ({ vertical }: MenuProps) => {
  const allLinks = CONSTS.menuItemList
  return (
    <MenuStyles vertical={vertical}>
      {allLinks.map((menuItem) => (
        <MenuItem item={menuItem} key={menuItem.label} />
      ))}
    </MenuStyles>
  )
}

export default Menu
