import { graphql } from 'gatsby'
import React from 'react'
import { MainCategory as MainCategoryType } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'

type MainCategoryProps = {
  data: {
    mainCategory: MainCategoryType
  }
}

const MainCategory = ({ data: { mainCategory } }: MainCategoryProps) => {
  return (
    <>
      <EquipmentOverview>
        <p>{mainCategory.title}</p>
      </EquipmentOverview>
    </>
  )
}

export default MainCategory

export const query = graphql`
  query SanityMainCategory($slug: String!) {
    mainCategory: sanityMainCategory(slug: { current: { eq: $slug } }) {
      title
      description
      id
      slug {
        current
      }
      images {
        asset {
          id
        }
      }
    }
  }
`
