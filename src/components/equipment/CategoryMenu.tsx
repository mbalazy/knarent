import React from 'react'
import { useLocation } from '@reach/router'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { Category, MainCategory } from '../../../types/sanity'
import { H4 } from '../../../theme/Typography'
import { SimpleLink } from '../shared/Links'

const CategoryMenuStyles = styled.aside`
  ${cardBasicStyle}
  overflow-y: auto;
  grid-column: 1 / span 1;
  grid-row: 1 / span 3;
  height: 100%;
`
const LinksStyles = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`
const MenuLinkStyles = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const CategoryMenu = () => {
  const location = useLocation()
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
    <CategoryMenuStyles>
      {mainCategories.nodes
        .sort((a: MainCategory, b: MainCategory) => a.title.localeCompare(b.title))
        .map((mainCategory: MainCategory) => {
          return (
            <LinksStyles key={mainCategory.id}>
              <MenuLinkStyles to={`/${mainCategory.slug.current}`}>
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
