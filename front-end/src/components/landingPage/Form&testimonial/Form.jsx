import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import FormModal from './FormModal'
import FormElement from './FormElement'

const Form = () => {
  return (
    <div id='Form' className="md:h-[50%] flex flex-col justify-center items-center gap-5 py-5 md:py-0 bg-[#C4C4C4]">
          <h1 className="md:text-lg-h2 text-lg-h3 text-customblue font-bold">
            Appointment Form
          </h1>
          <div className=" relative group w-[100%] md:w-[50%] p-4 z-5  flex items-center justify-center  ">
            {/* <img
              src={landingImages.formImg}
              alt="form-img"
              className="w-[100%]"
            />
            <div className="absolute w-full h-full bg-opacity-50 bg-black hidden group-hover:flex items-center justify-center">
              <FormModal/>
            </div> */}
            <FormElement/>

          </div>
        </div>
  )
}

export default Form