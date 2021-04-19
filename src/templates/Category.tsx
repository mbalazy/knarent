import React from 'react'
import { graphql } from 'gatsby'
import { MainCategory as MainCategoryType, Product as ProductType } from '../../types/sanity'
import EquipmentOverview from '../components/equipment/EquipmentOverview'

type MainCategoryProps = {
  data: {
    category: MainCategoryType
    products: { nodes: ProductType[] }
  }
}

const Category = ({ data: { category, products } }: MainCategoryProps) => {
  return <EquipmentOverview mainCategory={mainCategory} categories={categories.nodes} />
}

export default Category

export const query = graphql`
  query SanityCategory($slug: String!) {
    category: sanityCategory(slug: { current: { eq: $slug } }) {
      title
      description
      id
      mainCategory {
        _id
        slug {
          current
        }
      }
      slug {
        current
      }
    }
    products: allSanityEquipment(filter: { category: { slug: { current: { eq: $slug } } } }) {
      nodes {
        title
        images {
          asset {
            id
          }
        }
        id
        slug {
          current
        }
      }
    }
  }
`
