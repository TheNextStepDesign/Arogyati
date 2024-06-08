import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
const fontSize = '68px'
const FrontPoster = () => {
  return (
    <div className='w-[100%] h-[80%] z-10' >
        <img   className='object-cover w-[100%]'  src={landingImages.frontPoster} alt="front-poster" />
    </div>
  )
}

export default FrontPoster