import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as SmallArrow } from '../../../images/arrow19h.svg'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'
import { listOfBusinnesFeatures } from '../../../theme/CONSTS'
import { cardBasicStyle, centerInsideMe } from '../../../theme/globalStyle'
import { H4 } from '../../../theme/Typography'

const BusinessFeaturesWrapper = styled.section`
  ${cardBasicStyle}
  position: relative;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  gap: 4rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      padding-top: 3rem;
      grid-template-columns: 1fr;
    }
  `}
`
const FeaturesStyles = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  justify-self: start;

  margin: 5rem 0;
  padding: 0 3rem;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.l)} {
      margin: 0 0 5rem;
      justify-self: center;
    }
  `}
`
const FeatureBullet = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
`
const LogoWrapper = styled.div`
  ${centerInsideMe}
  padding: 2rem;

  svg {
    height: 240px;

    ${({ theme: { down, breakpoints } }) => css`
      ${down(breakpoints.s)} {
        height: 120px;
      }
    `}
  }

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.m)} {
      width: 70%;
    }
  `}
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
