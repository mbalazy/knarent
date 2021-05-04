import React from 'react'
import CONSTS, { listOfFeatures } from '../../../theme/CONSTS'
import OneFeature from '../shared/OneFeature'
import Section from '../shared/Section'
import styled from 'styled-components'

const AllFeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 1fr));
  gap: 5rem;
`

const Features = () => {
  return (
    <Section subheading={CONSTS.featureSubheading}>
      <AllFeaturesWrapper>
        {listOfFeatures.map((feature) => (
          <OneFeature key={feature.heading} {...feature} />
        ))}
      </AllFeaturesWrapper>
    </Section>
  )
}

export default Features
