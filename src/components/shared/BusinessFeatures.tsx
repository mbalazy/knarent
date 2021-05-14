import React from 'react'
import { ReactComponent as SmallArrow } from '../../../images/arrow19h.svg'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'
import { listOfBusinnesFeatures } from '../../../theme/CONSTS'
import { H4 } from '../../../theme/Typography'
import {
  BusinessFeaturesWrapper,
  FeatureBullet,
  FeaturesStyles,
  LogoWrapper,
} from './BusinessFeatures.style'

const BusinessFeatures = () => {
  return (
    <BusinessFeaturesWrapper>
      <LogoWrapper>
        <BigLogo />
      </LogoWrapper>
      <FeaturesStyles>
        {listOfBusinnesFeatures.map((feature) => (
          <FeatureBullet key={feature}>
            <SmallArrow />
            <H4 smaller>{feature}</H4>
          </FeatureBullet>
        ))}
      </FeaturesStyles>
    </BusinessFeaturesWrapper>
  )
}

export default BusinessFeatures
