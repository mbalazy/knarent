import React from 'react'
import styled, { css } from 'styled-components'
import { cardBasicStyle } from '../../theme/globalStyle'
import { H4 } from '../../theme/Typography'
import Menu from './menu/Menu'
import ContactInfo from './shared/ContactInfo'
import Map from './shared/Map'

const FooterWrapper = styled.footer`
  color: ${({ theme }) => theme.colors.lightText};
  background-color: ${({ theme }) => theme.colors.accent1};
  display: flex;
  flex-direction: column;
  align-items: center;
`
const FooterInnerWrapper = styled.div`
  width: 90vw;
  max-width: ${({ theme }) => theme.dimensions.mainContentWidth};

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      display: grid;
      justify-items: center;
      justify-content: center;
      gap: 4rem;

      & ul {
        display: none;
      }
    }
  `}
`
const FooterContentStyles = styled.div`
  display: grid;
  gap: 2rem;
`
const MapWrapper = styled.div`
  ${cardBasicStyle}
  overflow: hidden;
  width: 30rem;
  height: 24rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <Menu vertical />
        <FooterContentStyles>
          <H4>Skontaktuj się z nami</H4>
          <ContactInfo />
        </FooterContentStyles>
        <MapWrapper>
          <Map disableDefaultUI zoom={12} />
        </MapWrapper>
      </FooterInnerWrapper>
    </FooterWrapper>
  )
}

export default Footer
