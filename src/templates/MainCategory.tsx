import { graphql } from 'gatsby'
import React from 'react'
import { MainCategory as MainCategoryType, Category as CategoryType } from '../../types/sanity'
import CategoryOverview from '../components/equipment/CategoryOverview'

type MainCategoryProps = {
  data: {
    mainCategory: MainCategoryType
    categories: { nodes: CategoryType[] }
  }
}

const MainCategory = ({ data: { mainCategory, categories } }: MainCategoryProps) => {
  return <CategoryOverview mainCategory={mainCategory} categories={categories.nodes} />
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
