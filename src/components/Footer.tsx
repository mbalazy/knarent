import React from 'react'
import { H4 } from '../../theme/Typography'
import { FooterContentStyles, FooterInnerWrapper, FooterWrapper } from './Footer.style'
import Menu from './menu/Menu'
import ContactInfo from './shared/ContactInfo'

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
