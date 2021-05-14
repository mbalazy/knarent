import React, { useContext } from 'react'
import CONSTS from '../../../theme/CONSTS'
import { MenuStyles } from './Menu.style'
import MenuItem from './MenuItem'
import { MenuContext } from './MobileMenuContext'

type MenuProps = {
  vertical?: boolean
  onMobile?: boolean
}

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
