import About from '@/components/landingPage/About/About'
import HeroSection from '@/components/landingPage/HeroSection/HeroSection'
import Introduction from '@/components/landingPage/Introduction/Introduction'

import FrontPoster from '@/components/landingPage/frontposter/FrontPoster'
import React from 'react'


const Landing = () => {
  return (
    <div >
        <FrontPoster/>
        <HeroSection/>
        <Introduction/>
        <About/>
    </div>
  )
}

export default Landing