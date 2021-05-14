import React from 'react'
import { H4 } from '../../../theme/Typography'
import { Category, MainCategory } from '../../../types/sanity'
import { useMenu } from '../menu/useMenuContext'
import { LinksStyles, MenuLinkStyles } from './CategoryMenu.styles'
import SingleCategoryLink from './SingleCategoryLink'

type SingleCategoryLinkProps = {
  categories: { nodes: Category[] }
  mainCategory: MainCategory
}

const SingleMainCategoryLink = ({ categories, mainCategory }: SingleCategoryLinkProps) => {
  const { setShowMobileMenu } = useMenu()
  const handleCloseMenu = () => setShowMobileMenu(false)
  return (
    <LinksStyles key={mainCategory.id}>
      <MenuLinkStyles to={`/${mainCategory.slug.current}`} onClick={handleCloseMenu}>
        <H4 smaller>{mainCategory.title}</H4>
      </MenuLinkStyles>
      {categories.nodes
        .sort((a: Category, b: Category) => a.title.localeCompare(b.title))
        .map(
          (category: Category) =>
            category.mainCategory.id === mainCategory.id && (
              <SingleCategoryLink
                key={category.id}
                category={category}
                mainCategory={mainCategory}
              />
            )
        )}
    </LinksStyles>
  )
}

export default SingleMainCategoryLink
