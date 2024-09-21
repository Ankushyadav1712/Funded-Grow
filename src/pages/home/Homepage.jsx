import React from 'react'
import Navbar from '../../components/Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Footer from '../../components/Footer'

const Homepage = () => {
  return (
    <>
    <Navbar/>
        <Hero/>
        <Stats/>
        <Footer/>
    </>
  )
}

export default Homepage