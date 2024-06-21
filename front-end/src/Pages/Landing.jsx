import { landingImages } from '@/assets/images-data/landing'
import About from '@/components/landingPage/About/About'
import Slider from '@/components/landingPage/Carousel/Carousel'
import Faqs from '@/components/landingPage/FAQ/Faqs'
import FormTestimonial from '@/components/landingPage/Form&testimonial/FormTestimonial'
import HeroSection from '@/components/landingPage/HeroSection/HeroSection'
import Introduction from '@/components/landingPage/Introduction/Introduction'
import OurServices from '@/components/landingPage/OurServices/OurServices'
import Vision from '@/components/landingPage/Vision/Vision'
import FrontPoster from '@/components/landingPage/frontposter/FrontPoster'
import React from 'react'


const Landing = () => {
  return (
    <div >
        <FrontPoster img={landingImages.frontPoster} />
        <HeroSection/>
        <Introduction/>
        <About/>
        <Slider/>
        <OurServices/>
        <Vision/>
        <FormTestimonial/>
        <Faqs/>
    </div>
  )
}

export default Landing