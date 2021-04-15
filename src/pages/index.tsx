import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/hero/Hero'
import Features from '../components/section/Features'
import styled from 'styled-components'
import Offer from '../components/section/Offer'
import FeaturedProducts from '../components/section/FeaturedProducts'
import Contact from '../components/section/Contact'
import Faq from '../components/section/Faq'
import Footer from '../components/section/Footer'

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
      <Navbar sticky />
      <HomeWrapper>
        <Hero />
        <Features />
        <Offer />
        <FeaturedProducts />
        <Contact />
        <Faq />
      </HomeWrapper>
      <Footer />
    </>
  )
}

export default Home
