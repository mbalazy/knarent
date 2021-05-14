import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { Product } from '../../../types/sanity'
import ProductThumbnail from '../shared/ProductThumbnail'
import Section from '../shared/Section'
import { FeaturedWrapper } from './FeaturedProducts.style'

const FeaturedProducts = () => {
  const {
    allSanityEquipment: { edges: featuredProducts },
  } = useStaticQuery(graphql`
    query FeaturedProducts {
      allSanityEquipment(filter: { featured: { eq: true } }) {
        edges {
          node {
            id
            description
            title
            slug {
              current
            }
            featured
            images {
              asset {
                id
              }
            }
            category {
              slug {
                current
              }
              mainCategory {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <Section heading={CONSTS.featuredProductsHeading}>
        <FeaturedWrapper>
          {featuredProducts.map(({ node: product }: { node: Product }) => (
            <ProductThumbnail product={product} key={product.id} />
          ))}
        </FeaturedWrapper>
      </Section>
    </>
  )
}

export default FeaturedProducts
