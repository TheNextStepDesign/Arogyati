import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import Leftside from './Leftside'
import Rightside from './Rightside'
import { laptopWidth, mobileWidth, monitorWidth } from '@/lib/css'



const OurServices = () => {
  return (
    <div id='Services' className="bg-[#dedede] relative overflow-hidden ">
        <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}]  m-auto flex flex-col-reverse   md:items-center md:flex-row   py-10 md:gap-10`} >
            <Leftside/>
            <Rightside/>
        </div>
        {/* <img src={landingImages.greenSvg}  alt="green-svg" className='p-0 rotate-90 absolute right-[-900px] top-[170px] z-0' /> */}
    </div>
  )
}

export default OurServices