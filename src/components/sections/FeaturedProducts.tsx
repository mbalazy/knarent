import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { Product } from '../../../types/sanity'
import ProductThumbnail from './shared/ProductThumbnail'
import Section from './shared/Section'

const FeaturedWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  gap: 3rem;
  flex-wrap: wrap;
`

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
