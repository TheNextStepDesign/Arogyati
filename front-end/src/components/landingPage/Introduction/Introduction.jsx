import { landingImages } from '@/assets/images-data/landing'
import React from 'react'

const lists = ["First Big Private Clinic In Kolhapur.","Having Advance Modalities.","Working For Holistic Approch.","Working Like A Rehabe Center "]

const Introduction = () => {
  return (
    <div className='bg-white mt-[-20px]' >
        
        <div  >
        <div className='bg-[#dedede] md:py-[80px] py-3 ' >
        </div>
        <div className='w-[90%] md:w-[70%] 2xl:w-[1440px] m-auto'>

        
            <div className='flex flex-col md:flex-row items-center gap-8 md:pt-[80px] pt-[20px] md:mt-[-250px]' >
                <div className="md:w-[50%] w-[100%] flex flex-col" >
                    <div className='md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3' >
                        Introduction
                    </div>
                    <div className='flex flex-col gap-2 w-[100%] md:text-lg-h3 ' >
                        {
                            lists.map(el=>(<li >{el}</li>))
                        }
                        <div className='flex ' >
                            <li ></li>
                            <pre className='font-sora' >Physiotherapy Services For Hospitalized & {"\n"}Bedridden Patients At Home.</pre>
                        </div>
                    </div>
                    <p>( Speech Therapy, Nutritionist, Prosthesis & Orthosis, Residential Facility, Psychological Counselling ) </p>
                    
                </div>
                <div lassName="md:w-[50%] w-[100%]">
                    <img width={"100%"} className='m-auto' src={landingImages.image2} alt="image2" />
                </div>
            </div>
        </div>
        <div className='bg-[#dedede] md:py-[80px] md:mt-[-150px] ' >
        </div>
        </div>
    </div>
  )
}

export default Introduction