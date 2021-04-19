import { graphql } from 'gatsby'
import React from 'react'
import { MainCategory as MainCategoryType, Category as CategoryType } from '../../types/sanity'
import CategoryThumbnail from '../components/equipment/CategoryThumbnail'
import EquipmentOverview from '../components/equipment/EquipmentOverview'

type MainCategoryProps = {
  data: {
    mainCategory: MainCategoryType
    categories: { nodes: CategoryType[] }
  }
}

const MainCategory = ({ data: { mainCategory, categories } }: MainCategoryProps) => {
  return (
    <EquipmentOverview title={mainCategory.title}>
      {categories.nodes
        .sort((a, b) => a.title.localeCompare(b.title))
        .map((category) => (
          <CategoryThumbnail key={category.id} category={category} />
        ))}
    </EquipmentOverview>
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
    categories: allSanityCategory(filter: { mainCategory: { slug: { current: { eq: $slug } } } }) {
      nodes {
        title
        description
        id
        slug {
          current
        }
        mainCategory {
          id
          slug {
            current
          }
        }
        images {
          asset {
            id
          }
        }
      }
    }
  }
`
