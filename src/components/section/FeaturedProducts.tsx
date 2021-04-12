import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { Product } from '../../../types/sanity'
import ProductThumbnail from './shared/ProductThumbnail'
import Section from './shared/Section'

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
          }
        }
      }
    }
  `)

  const FeaturedWrapper = styled.div`
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
  `

  return (
    <>
      <Section heading={CONSTS.featuredProductsHeading}>
        <FeaturedWrapper>
          {featuredProducts.map(({ node }: { node: Product }) => (
            <ProductThumbnail product={node} key={node.id} />
          ))}
        </FeaturedWrapper>
      </Section>
    </>
  )
}

export default FeaturedProducts
