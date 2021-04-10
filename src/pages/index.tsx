import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Features from '../components/section/Features'
import styled from 'styled-components'

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <>
      <Navbar sticky />
      <HomeWrapper>
        <Hero />
        <Features />
      </HomeWrapper>
    </>
  )
}

export default Home
