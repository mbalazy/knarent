import React from 'react'
import Hero from '../components/hero/Hero'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Features from '../components/sections/Features'
import Offer from '../components/sections/Offer'
import { HomeWrapper } from './index.style'

const Home = () => {
  return (
    <>
      <Hero />
      <HomeWrapper>
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
