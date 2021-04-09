import React from 'react'
import HeroImage from './HeroImage'
import styled from 'styled-components'
import Button from '../shared/Button'

const Hero = () => {
  const Content = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.lightText};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <HeroImage>
      <Content>
        <>
          <h1>FHU Knarent Artur Knap</h1>
          <h2>Wypożyczalnia sprzętu budowlanego, ogrodniczego i sprzątającego.</h2>
          <Button>Zobacz nasz asortyment</Button>
        </>
      </Content>
    </HeroImage>
  )
}

export default Hero
