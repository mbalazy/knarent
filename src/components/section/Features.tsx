import React from 'react'
import CONSTS, { listOfFeatures } from '../../../theme/CONSTS'
import OneFeature from './shared/OneFeature'
import Section from './shared/Section'
import styled from 'styled-components'

const AllFeaturesWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
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
