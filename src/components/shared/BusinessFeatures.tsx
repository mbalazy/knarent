import React from 'react'
import styled from 'styled-components'
import { ReactComponent as SmallArrow } from '../../../images/arrow19h.svg'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'
import { listOfBusinnesFeatures } from '../../../theme/CONSTS'
import { cardBasicStyle, centerMe } from '../../../theme/globalStyle'
import { H4 } from '../../../theme/Typography'

const BusinessFeaturesWrapper = styled.section`
  display: flex;
  ${cardBasicStyle}
`
const FeaturesStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  flex: 4;
  margin: 5rem 0;
`
const FeatureBullet = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const LogoWrapper = styled.div`
  flex: 5;
  ${centerMe}

  svg {
    height: 250px;
  }
`

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
