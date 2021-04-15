import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Features from '../components/sections/Features'
import styled from 'styled-components'
import Offer from '../components/sections/Offer'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'
import Footer from '../components/Footer'

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey002};
  gap: 12rem;
  padding-bottom: 12rem;
`

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <Hero />
        <Features />
        <Offer />
        <FeaturedProducts />
        <Contact />
        <Faq />
      </HomeWrapper>
    </>
  )
}

export default Home
