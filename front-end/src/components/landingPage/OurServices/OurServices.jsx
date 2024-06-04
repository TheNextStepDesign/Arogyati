import { landingImages } from '@/assets/images-data/landing'
import React from 'react'

const OurServices = () => {
  return (
    <div className="bg-[#dedede]">
        <div className='w-[90%] md:w-[100%]  m-auto flex flex-col md:flex-row items-center' >
            <div className='md:w-[50%]' >
                <img className='w-[100%]' src={landingImages.image4} alt="image3" />
            </div>
            <div className='md:w-[50%]'>
                <img src={landingImages.greenSvg} alt="green-svg" />
            </div>
        </div>
    </div>
  )
}

export default OurServices