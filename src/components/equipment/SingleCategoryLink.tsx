import React from 'react'
import { Category, MainCategory } from '../../../types/sanity'
import { useMenu } from '../menu/useMenuContext'
import { SimpleLink } from '../shared/Links'

type SingleCategoryLinkProps = {
  category: Category
  mainCategory: MainCategory
}

const SingleCategoryLink = ({ category, mainCategory }: SingleCategoryLinkProps) => {
  const { setShowMobileMenu } = useMenu()
  const handleCloseMenu = () => setShowMobileMenu(false)
  return (
    <li>
      <SimpleLink
        smaller={true}
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
