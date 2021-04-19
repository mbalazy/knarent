import React from 'react'
import { graphql } from 'gatsby'
import { Product as ProductType } from '../../types/sanity'
import { H3 } from '../../theme/Typography'

type MainCategoryProps = {
  data: {
    product: ProductType
  }
}

const Category = ({ data: { product } }: MainCategoryProps) => {
  console.log(product)
  return <H3>{product.title}</H3>
}

export default Category

export const query = graphql`
  query SanityProducts($slug: String!) {
    product: sanityEquipment(slug: { current: { eq: $slug } }) {
      id
      title
      description
      images {
        asset {
          id
        }
      }
    }
  }
`
