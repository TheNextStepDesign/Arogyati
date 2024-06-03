import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
const fontSize = '68px'
const FrontPoster = () => {
  return (
    <div className='w-[100%] h-[80%] z-10' >
        <img   className='object-cover w-[100%]'  src={landingImages.frontPoster} alt="front-poster" />
        {/* <div className='flex justify-center gap-20' >
            <h1 className='absolute top-[50%] left-[10%] sm:text-[20px] md:text-[40px] lg:text-[68px]'  >Where Healing</h1>
            <h1 className='absolute top-[50%] right-[10%] sm:text-[20px] md:text-[40px] lg:text-[68px]' >Meets Harmoney</h1>
        </div> */}
    </div>
  )
}

export default FrontPoster