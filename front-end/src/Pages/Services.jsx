import { serviceFacalityImages } from '@/assets/images-data/landing'
import ServicesCard from '@/components/Services/OurServices/ServicesCard'
import ConditionTreated from '@/components/Services/conditionTreated/ConditionTreated'
import Facilities from '@/components/Services/facilities/Facilities'
import FrontPoster from '@/components/landingPage/frontposter/FrontPoster'
import React from 'react'

const Services = () => {
  return (
    <>
        <FrontPoster img={serviceFacalityImages.frontPoster}/>
        <ServicesCard/>
        <ConditionTreated/>
        <Facilities/>
    </>
  )
}

export default Services