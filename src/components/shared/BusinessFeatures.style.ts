import styled, { css } from 'styled-components'
import { cardBasicStyle, centerInsideMe } from '../../../theme/globalStyle'

export const BusinessFeaturesWrapper = styled.section`
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
export const FeaturesStyles = styled.ul`
  display: grid;
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
export const FeatureBullet = styled.li`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  gap: 2rem;
`
export const LogoWrapper = styled.div`
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
