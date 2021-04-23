import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { SimpleLink } from '../shared/Links'
type Item = typeof CONSTS.menuItemList[number]
type MenuItemProps = {
  item: Item
}

const MenuItem = ({ item: { label, link } }: MenuItemProps) => {
  return (
    <li>
      <SimpleLink to={link}>{label}</SimpleLink>
    </li>
  )
}

export default MenuItem
