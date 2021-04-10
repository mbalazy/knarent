import React from 'react'
import HeroImage from './HeroImage'
import styled from 'styled-components'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'
import { BigLink } from '../shared/Links'
import { H1, H2 } from '../shared/Typography'

const Hero = () => {
  const Content = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 100%;
    max-width: 1300px;
    height: 100%;
    padding: 6rem;
    color: ${({ theme }) => theme.colors.lightText};

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;
  `
  const Copy = styled.section`
    max-width: 550px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
  `
  const LogoWrapper = styled.section`
    width: 500px;
    height: 60%;
    background-color: ${({ theme }) => theme.colors.lightText};
    border-radius: ${({ theme }) => theme.border.light};

    display: flex;
    align-items: center;
    justify-content: center;
  `
  const LogoStyles = styled(BigLogo)`
    padding: 4rem;
  `

  return (
    <HeroImage>
      <Content>
        <Copy>
          <H1>FHU Knarent Artur Knap</H1>
          <H2>Wypożyczalnia sprzętu budowlanego, ogrodniczego i sprzątającego.</H2>
          <BigLink to="/">Zobacz nasz asortyment</BigLink>
        </Copy>
        <LogoWrapper>
          <LogoStyles />
        </LogoWrapper>
      </Content>
    </HeroImage>
  )
}

export default Hero
