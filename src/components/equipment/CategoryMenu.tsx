import React from 'react'
import { useLocation } from '@reach/router'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'
import { cardBasicStyle } from '../../../theme/globalStyle'

const CategoryMenuWrapper = styled.div`
  ${cardBasicStyle}
`

const CategoryMenu = () => {
  const location = useLocation()
  const data = useStaticQuery(graphql`
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
  console.log(data)
  return (
    <CategoryMenuWrapper>
      <p>CategoryMenu</p>
    </CategoryMenuWrapper>
  )
}

export default CategoryMenu
