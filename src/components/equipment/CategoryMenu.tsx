import React from 'react'
import { MainCategory } from '../../../types/sanity'
import { useAllCategory } from '../../graphql/useAllCategory'
import { CategoryMenuStyles } from './CategoryMenu.styles'
import SingleMainCategoryLink from './SingleMainCategoryLink'

type CategoryMenuProps = {
  onMobile?: boolean
}

const CategoryMenu = ({ onMobile }: CategoryMenuProps) => {
  const { mainCategories, categories } = useAllCategory()
  return (
    <CategoryMenuStyles onMobile={onMobile}>
      {mainCategories
        .sort((a: MainCategory, b: MainCategory) => a.title.localeCompare(b.title))
        .map((mainCategory: MainCategory) => (
          <SingleMainCategoryLink
            key={mainCategory.id}
            mainCategory={mainCategory}
            categories={categories}
          />
        ))}
    </CategoryMenuStyles>
  )
}

export default CategoryMenu
