import React from 'react'
import styled, { css } from 'styled-components'
import { H4 } from '../../theme/Typography'
import Menu from './menu/Menu'
import ContactInfo from './shared/ContactInfo'

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
      justify-items: start;
      justify-content: center;
      gap: 4rem;
    }
  `}
`
const FooterContentStyles = styled.div`
  display: grid;
  gap: 2rem;
  padding: 0 1.4rem;
`

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <FooterContentStyles>
          <H4>Skontaktuj się z nami</H4>
          <ContactInfo />
        </FooterContentStyles>
        <Menu vertical />
      </FooterInnerWrapper>
    </FooterWrapper>
  )
}

export default Footer
