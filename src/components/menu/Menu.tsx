import React from 'react'
import styled, { css } from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import MenuItem from './MenuItem'

type MenuProps = {
  vertical?: boolean
}

const MenuStyles = styled.div<MenuProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin: 0 4rem;

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
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
