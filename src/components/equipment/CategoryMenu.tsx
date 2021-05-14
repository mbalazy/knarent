import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { MainCategory } from '../../../types/sanity'
import { CategoryMenuStyles } from './CategoryMenu.styles'
import SingleMainCategoryLink from './SingleMainCategoryLink'

type CategoryMenuProps = {
  onMobile?: boolean
}

const CategoryMenu = ({ onMobile }: CategoryMenuProps) => {
  const {
    allSanityMainCategory: mainCategories,
    allSanityCategory: categories,
  } = useStaticQuery(graphql`
    query AllSanityCategories {
      allSanityMainCategory {
        nodes {
          title
          id
          slug {
            current
          }
        }
      }
      allSanityCategory {
        nodes {
          title
          id
          slug {
            current
          }
          mainCategory {
            id
          }
        }
      }
    }
  `)

  return (
    <CategoryMenuStyles onMobile={onMobile}>
      {mainCategories.nodes
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
