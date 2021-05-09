import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { SimpleLink } from '../shared/Links'

type Item = typeof CONSTS.menuItemList[number]
type MenuItemProps = {
  item: Item
  onClick?: () => unknown
}
import styled from 'styled-components'

const NavbarLinkStyle = styled(SimpleLink)`
  backface-visibility: hidden;
  &:hover {
  }
`

const MenuItem = ({ item: { label, link }, ...delegated }: MenuItemProps) => {
  return (
    <li {...delegated}>
      <NavbarLinkStyle to={link}>{label}</NavbarLinkStyle>
    </li>
  )
}

export default MenuItem
