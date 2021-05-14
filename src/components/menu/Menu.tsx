import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { MenuStyles } from './Menu.style'
import MenuItem from './MenuItem'
import { useMenu } from './useMenuContext'

type MenuProps = {
  vertical?: boolean
  onMobile?: boolean
}

const Menu = ({ vertical, onMobile }: MenuProps) => {
  const { menuItemList } = CONSTS
  const { setShowMobileMenu } = useMenu()
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
