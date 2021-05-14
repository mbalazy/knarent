import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { NavbarLinkStyle } from './MenuItem.style'

type Item = typeof CONSTS.menuItemList[number]
type MenuItemProps = {
  item: Item
  onClick?: () => unknown
}

const MenuItem = ({ item: { label, link }, ...delegated }: MenuItemProps) => {
  return (
    <li {...delegated}>
      <NavbarLinkStyle to={link}>{label}</NavbarLinkStyle>
    </li>
  )
}

export default MenuItem
