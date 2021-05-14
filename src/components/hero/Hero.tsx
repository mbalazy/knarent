import React from 'react'
import { H1, H2 } from '../../../theme/Typography'
import { BigLink } from '../shared/Links'
import { Content, Copy, LogoStyles, LogoWrapper } from './Hero.style'
import HeroImage from './HeroImage'

const Hero = () => {
  return (
    <HeroImage>
      <Content>
        <Copy>
          <H1>FHU Knarent Artur Knap</H1>
          <H2>Wypożyczalnia sprzętu budowlanego, ogrodniczego i sprzątającego.</H2>
          <BigLink to="/#kontakt">Sprawdź adres</BigLink>
        </Copy>
        <LogoWrapper>
          <LogoStyles />
        </LogoWrapper>
      </Content>
    </HeroImage>
  )
}

export default Hero
