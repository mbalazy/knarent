import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import CONSTS from '../../../theme/CONSTS'
import { MainCategory } from '../../../types/sanity'
import MainCategoryPreview from './shared/MainCategoryPreview'
import Section from './shared/Section'

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
                url
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

  console.log(allMainCategory)

  return (
    <Section heading={CONSTS.offerHeading} subheading={CONSTS.offerSubheading}>
      {allMainCategory.map(({ node }: { node: MainCategory }) => (
        <MainCategoryPreview mainCategory={node} key={node.id} />
      ))}
    </Section>
  )
}

export default Offer
