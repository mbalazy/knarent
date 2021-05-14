import React from 'react'
import Hero from '../components/hero/Hero'
import Contact from '../components/sections/Contact'
import Faq from '../components/sections/Faq'
import FeaturedProducts from '../components/sections/FeaturedProducts'
import Features from '../components/sections/Features'
import Offer from '../components/sections/Offer'

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <Offer />
        <FeaturedProducts />
        <Contact />
        <Faq />
      </main>
    </>
  )
}

export default Home
