import React from 'react'
import CONSTS, { listOfFeatures } from '../../../theme/CONSTS'
import OneFeature from '../shared/OneFeature'
import Section from '../shared/Section'
import { AllFeaturesWrapper } from './Features.style'

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
