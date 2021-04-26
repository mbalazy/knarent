import React from 'react'
import HeroImage from './HeroImage'
import styled, { css } from 'styled-components'
import { ReactComponent as BigLogo } from '../../../images/logo_knarent_big.svg'
import { BigLink } from '../shared/Links'
import { H1, H2 } from '../../../theme/Typography'

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
  flex-wrap: wrap;

  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      padding: 3rem;
      gap: 1rem;
      justify-content: center;
    }
  `}
`
const Copy = styled.section`
  flex: 1 1 350px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  & > a {
    margin-top: 5vh;
  }
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      h1 {
        font-size: 2.4rem;
      }
      h2 {
        font-size: 2rem;
      }
      a {
        font-size: 1.6rem;
        align-self: center;
      }
    }
  `}
`
const LogoWrapper = styled.section`
  flex: 1 1 300px;

  background-color: ${({ theme }) => theme.colors.lightText};
  border-radius: ${({ theme }) => theme.border.light};

  display: flex;
  align-items: center;
  justify-content: center;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      flex: 1 1 300px;
    }
  `}
`
const LogoStyles = styled(BigLogo)`
  padding: 8rem 6rem;
  ${({ theme: { down, breakpoints } }) => css`
    ${down(breakpoints.s)} {
      padding: 3rem;
    }
  `}
`

const Hero = () => {
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
