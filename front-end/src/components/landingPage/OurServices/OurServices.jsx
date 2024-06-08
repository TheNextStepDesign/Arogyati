import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'



const OurServices = () => {
  return (
    <div id='Services' className="bg-[#dedede] relative overflow-hidden ">
        <div className='w-[90%] md:w-[70%] 2xl:w-[1440px]  m-auto flex flex-col md:flex-row items-center py-10 md:gap-10' >
            <Leftside/>
            <Rightside/>
        </div>
        {/* <img src={landingImages.greenSvg}  alt="green-svg" className='p-0 rotate-90 absolute right-[-900px] top-[170px] z-0' /> */}
    </div>
  )
}

export default OurServices