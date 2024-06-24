import { mobileWidth ,laptopWidth,monitorWidth} from '@/lib/css'
import React from 'react'
import CustomH2 from '../../landingPage/comman/CustomHeading'
import { Card } from '../../ui/card'

const data = ["Psychological Counseling","Dietitian Advice","Physiotherapy Services For Hospitalized & Bedridden Patients At Home","Speech Therapy","Prosthesis & Orthosis","Super Induction Therapy","Cupping And Dry Needling Taping"]

const ServicesCard = () => {
  return (
    <div  className='py-10 md:py-24  '>
        <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
            <div className='flex flex-col gap-10' >
                <div>
                    <CustomH2>Our Services</CustomH2>
                </div>
                <div className='flex flex-wrap gap-2 ' >

                    {
                        data.map((el,index)=><div key={index} className=' w-[48%] sm:w-[48%] md:w-[30%] lg:w-[23%] h-[180px] md:h-[245px]' >
                            <Card className='h-full flex justify-center items-center bg-[#cbcaca]  hover:shadow-[#7D8E39] cursor-pointer' >
                                <p className='w-[80%] text-center font-bold' >
                                {el}
                                </p>
                            </Card>
                        </div>)
                    }

                </div>
            </div>
        </div>

    </div>
  )
}

export default ServicesCard