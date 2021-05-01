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
  gap: 4rem;

  ${({ vertical }) =>
    vertical &&
    css`
      flex-direction: column;
      align-items: flex-start;
      width: auto;
      margin: 0;
      gap: 2rem;
    `}
`

const DesktopMenu = ({ vertical }: MenuProps) => {
  const { menuItemList } = CONSTS
  return (
    <MenuStyles vertical={vertical}>
      {menuItemList.map((menuItem) => (
        <MenuItem item={menuItem} key={menuItem.label} />
      ))}
    </MenuStyles>
  )
}

export default DesktopMenu
