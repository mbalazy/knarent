import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { SimpleLink } from '../shared/Links'

type Item = typeof CONSTS.menuItemList[number]
type MenuItemProps = {
  item: Item
  onClick?: () => unknown
}

const MenuItem = ({ item: { label, link }, ...delegated }: MenuItemProps) => {
  return (
    <li {...delegated}>
      <SimpleLink to={link}>{label}</SimpleLink>
    </li>
  )
}

export default MenuItem
