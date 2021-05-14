import React, { useContext } from 'react'
import { MenuContext } from '../menu/MobileMenuContext'
import { SimpleLink } from '../shared/Links'
import { Category, MainCategory } from '../../../types/sanity'

type SingleCategoryLinkProps = {
  category: Category
  mainCategory: MainCategory
}

const SingleCategoryLink = ({ category, mainCategory }: SingleCategoryLinkProps) => {
  const { setShowMobileMenu } = useContext(MenuContext)
  const handleCloseMenu = () => setShowMobileMenu(false)
  return (
    <li>
      <SimpleLink
        smaller
        key={category.id}
        to={`/${mainCategory.slug.current}/${category.slug.current}`}
        onClick={handleCloseMenu}
      >
        {category.title}
      </SimpleLink>
    </li>
  )
}

export default SingleCategoryLink
