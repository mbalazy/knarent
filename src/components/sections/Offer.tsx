import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import CONSTS from '../../../theme/CONSTS'
import { MainCategory } from '../../../types/sanity'
import MainCategoryThumbnail from '../shared/MainCategoryThmubnail'
import Section from '../shared/Section'

const OfferWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(27rem, 1fr));
  gap: 4rem;
`

const Offer = () => {
  const {
    allSanityMainCategory: { edges: allMainCategory },
  } = useStaticQuery(graphql`
    query AllMainCategory {
      allSanityMainCategory {
        edges {
          node {
            id
            description
            title
            images {
              asset {
                id
              }
            }
            slug {
              current
            }
          }
        }
      }
    }
  `)

  return (
    <Section heading={CONSTS.offerHeading} subheading={CONSTS.offerSubheading}>
      <OfferWrapper>
        {allMainCategory.map(({ node }: { node: MainCategory }) => (
          <MainCategoryThumbnail mainCategory={node} key={node.id} />
        ))}
      </OfferWrapper>
    </Section>
  )
}

export default Offer
