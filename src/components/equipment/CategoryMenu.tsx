import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import { H4 } from '../../../theme/Typography'
import { Category, MainCategory } from '../../../types/sanity'
import { MenuContext } from '../menu/MobileMenuContext'
import { CategoryMenuStyles, LinksStyles, MenuLinkStyles } from './CategoryMenu.styles'
import SingleCategoryLink from './SingleCategoryLink'

type CategoryMenuProps = {
  onMobile?: boolean
}

const CategoryMenu = ({ onMobile }: CategoryMenuProps) => {
  const location = useLocation()
  const { setShowMobileMenu } = useContext(MenuContext)
  const handleCloseMenu = () => onMobile && setShowMobileMenu(false)
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
        .map((mainCategory: MainCategory) => {
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
                      <SingleCategoryLink category={category} mainCategory={mainCategory} />
                    )
                )}
            </LinksStyles>
          )
        })}
    </CategoryMenuStyles>
  )
}

export default CategoryMenu
