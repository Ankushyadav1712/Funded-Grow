import React from 'react'

import Navbar from '../Navbar'
import Hero from './Hero'
import Stats from './Stats'
import Footer from '../Footer'
import './Homepage.css'

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