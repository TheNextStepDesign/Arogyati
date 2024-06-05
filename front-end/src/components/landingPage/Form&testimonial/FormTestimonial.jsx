import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import Slider from '../Carousel/Carousel'
import Caroseltem from '../Carousel/Caroseltem'

const data = [{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon}]

const FormTestimonial = () => {
  return (
    <div className='bg-[#dedede] relative overflow-hidden' >
        <div className='md:h-[1200px] flex flex-col ' >

        <div className='md:h-[50%] flex flex-col justify-center items-center gap-5' >
            <h1 className='md:text-lg-h2 text-lg-h3 text-customblue font-bold' >
            Appointment Form
            </h1>
            <div className='w-[80%]md:w-[100%] p-4 z-10'  >
                <img src={landingImages.formImg} alt="form-img"
                className='w-[100%]' />
            </div>
        </div>
        <div className='md:h-[50%] flex flex-col justify-center items-center' >
            <h1 className='md:text-lg-h2 text-lg-h3 text-customblue font-bold' >
            Testimonial
            </h1>
            <div className='md:w-[50%] w-[90%] m-auto md:bg-white md:rounded-tr-[100px] md:rounded-bl-[100px] md:py-10 md:px-5 z-10' >
    
                <Caroseltem isFooter={true} data={data}/>
                
            </div>
        </div>
        
            
        </div>
        <img src={landingImages.greenSvg}  alt="green-svg" className='p-0 rotate-180 absolute left-[-1200px] bottom-[-1010px] z-0' />
    </div>
  )
}

export default FormTestimonial