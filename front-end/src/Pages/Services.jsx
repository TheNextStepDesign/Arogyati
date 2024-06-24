import { serviceFacalityImages } from '@/assets/images-data/landing'
import ServicesCard from '@/components/Services/OurServices/ServicesCard'
import ConditionTreated from '@/components/Services/conditionTreated/ConditionTreated'
import Facilities from '@/components/Services/facilities/Facilities'
import Parallax from '@/components/landingPage/comman/Parallax'
import Parallax2 from '@/components/landingPage/comman/Parallax2'
import FrontPoster from '@/components/landingPage/frontposter/FrontPoster'
import React, { useEffect } from 'react'

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Arogyati | Services'
  }, []);


  return (
    <>
        <FrontPoster img={serviceFacalityImages.frontPoster} img2={serviceFacalityImages.frontPosterMob}/>
        <Parallax bgImage={'https://res.cloudinary.com/dw3xsfb9z/image/upload/v1719227072/Component_3_vcgte6.png'} >
        <ServicesCard/>
        </Parallax>
        <ConditionTreated/>
      <Parallax2 bgImage={'https://res.cloudinary.com/dw3xsfb9z/image/upload/v1719230757/Component_4_mkj2cg.png'}  >

        <Facilities/>
        </Parallax2>
    </>
  )
}

export default Services