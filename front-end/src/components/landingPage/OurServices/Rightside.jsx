import React from 'react'
const services = ["Well Equipped Physiotherapy Center With Ultra Modern German Technologies First Time In Kolhapur","Psychological Counselling","Dietitian Advice","Physiotherapy Services For Hospitalized & Bedridden Patients At Home","Speech Therapy","Prosthesis & Orthosis","Super Induction Therapy","Cupping And Dry Needling","Taping","Resedential Facility","Mobile Van"]
const Rightside = () => {
  return (
    <div className='md:w-[50%] flex flex-col justify-center z-5'>
                
                <div className='md:w-[100%] m-auto py-5 md:py-0' >
                  <h1 className='md:text-lg-h2 text-lg-h3 mb-3 font-bold text-customblue' >Our Services</h1>

                  <div className='flex flex-col gap-2 w-[100%]' >
                    {
                      services.map((el,i)=>(<div key={i} className='flex ' >
                      <li ></li>
                      <p className='font-sora' >{el}</p>
                      </div>))
                    }
                  </div>
                </div>
                
                

            </div>
  )
}

export default Rightside