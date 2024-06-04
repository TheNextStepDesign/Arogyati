import { landingImages } from '@/assets/images-data/landing'
import React from 'react'

const services = ["Well Equipped Physiotherapy Center With Ultra Modern German Technologies First Time In Kolhapur","Psychological Counselling","Dietitian Advice","Physiotherapy Services For Hospitalized & Bedridden Patients At Home","Speech Therapy","Prosthesis & Orthosis","Super Induction Therapy","Cupping And Dry Needling","Taping","Resedential Facility","Mobile Van"]

const OurServices = () => {
  return (
    <div className="bg-[#dedede]">
        <div className='w-[90%] md:w-[100%]  m-auto flex flex-col md:flex-row items-center' >
            <div className='md:w-[50%]' >
                <img className='w-[100%]' src={landingImages.image4} alt="image3" />
            </div>
            <div className='md:w-[50%] flex flex-col justify-center'>
                {/* <img src={landingImages.greenSvg} alt="green-svg" /> */}
                <div className='md:w-[60%] m-auto py-5 md:py-0' >
                  <h1 className='md:text-lg-h2 text-lg-h3 mb-3 font-bold' >Our Services</h1>

                  <div className='flex flex-col gap-2 w-[100%]' >
                    {
                      services.map(el=>(<div className='flex ' >
                      <li ></li>
                      <p className='font-sora' >{el}</p>
                      </div>))
                    }
                  </div>
                </div>
                
                

            </div>
        </div>
    </div>
  )
}

export default OurServices