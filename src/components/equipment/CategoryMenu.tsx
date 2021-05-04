import React, { useContext } from 'react'
import { useLocation } from '@reach/router'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { Category, MainCategory } from '../../../types/sanity'
import { H4 } from '../../../theme/Typography'
import { SimpleLink } from '../shared/Links'
import { MenuContext } from '../menu/MobileMenuContext'

type CategoryMenuProps = {
  onMobile?: boolean
}

const CategoryMenuStyles = styled.aside<CategoryMenuProps>`
  ${cardBasicStyle}
  overflow-y: auto;

  ${({ onMobile }) =>
    !onMobile &&
    css`
      max-height: 80rem;
      height: 100%;
      grid-column: 1 / span 1;
      grid-row: 1 / span 3;
    `}
`
const LinksStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      padding: 3rem 3rem 0;
    }
  `}
`
const MenuLinkStyles = styled(Link)`
  text-decoration: none;
  color: inherit;
`

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
                      <SimpleLink
                        smaller
                        key={category.id}
                        to={`/${mainCategory.slug.current}/${category.slug.current}`}
                        onClick={handleCloseMenu}
                      >
                        {category.title}
                      </SimpleLink>
                    )
                )}
            </LinksStyles>
          )
        })}
    </CategoryMenuStyles>
  )
}

export default CategoryMenu
