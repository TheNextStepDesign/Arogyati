import { landingImages } from '@/assets/images-data/landing'
import React from 'react'
import Slider from '../Carousel/Carousel'
import Caroseltem from '../Carousel/Caroseltem'

const data = [{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon},{title:"Dummy reviews", paragraph:["A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons."],footer:landingImages.starIcon}]

const FormTestimonial = () => {
  return (
    <div className='bg-[#dedede]' >
        <div className='md:h-[1000px] flex flex-col' >

        <div className='md:h-[50%] flex flex-col justify-center items-center gap-5' >
            <h1 className='md:text-lg-h2 text-lg-h3 text-customblue font-bold' >
            Appointment Form
            </h1>
            <div className='flex flex-col gap-2 md:w-[40%]' >
                <div className='bg-white p-1' >
                    <input type="text" placeholder='Name' />
                </div>
                <div className='flex justify-between  gap-0' >
                    <div className='bg-white p-1'><input type="number" placeholder='Age' /></div>
                    <div className='bg-white p-1'><input type="number" placeholder='Weight' /></div>
                    <div className='bg-white p-1'><input type="text" placeholder='Gender' /></div>
                    <div className='bg-white p-1'><input type="date" placeholder='Date - DD/MM/YYYY' /></div>
                    
                </div>
                <div className='bg-white p-1' >
                    <input type="text" placeholder='Address' />
                </div>
                <div className='flex justify-between gap-2'>
                    <div className='bg-white p-1 w-[50%]'><input type="number" placeholder='Mobile no.' /></div>
                    <div className='bg-white p-1 w-[50%]'><input type="text" placeholder='Chief Complain' /></div>
                </div>

            </div>
        </div>
        <div className='md:h-[50%] flex flex-col justify-center items-center' >
            <h1 className='md:text-lg-h2 text-lg-h3 text-customblue font-bold' >
            Testimonial
            </h1>
            <div className='w-[50%] m-auto bg-white rounded-tr-[100px] rounded-bl-[100px] py-10 px-5' >
                

                <Caroseltem isFooter={true} data={data}/>
                
            </div>
        </div>
        
            
        </div>
    </div>
  )
}

export default FormTestimonial