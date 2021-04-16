import React from 'react'
import { useLocation } from '@reach/router'
import { graphql, Link, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'
import { Category, MainCategory } from '../../../types/sanity'
import { H4 } from '../../../theme/Typography'
import { SimpleLink } from '../shared/Links'

const CategoryMenuWrapper = styled.div`
  ${cardBasicStyle}
  display: flex;
  flex-direction: column;
  padding: 3rem;

  ${H4}:not(:first-child) {
    margin-top: 4rem;
  }
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
    <CategoryMenuWrapper>
      {mainCategories.nodes
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((mainCategory: MainCategory) => {
          return (
            <>
              <H4 key={mainCategory.id}>{mainCategory.title}</H4>
              {categories.nodes
                .sort((a, b) => a.title.localeCompare(b.title))
                .map(
                  (category: Category) =>
                    category.mainCategory.id === mainCategory.id && (
                      <SimpleLink
                        to={`/${mainCategory.slug.current}/${category.slug.current}`}
                        key={category.id}
                      >
                        {category.title}
                      </SimpleLink>
                    )
                )}
            </>
          )
        })}
    </CategoryMenuWrapper>
  )
}

export default CategoryMenu
