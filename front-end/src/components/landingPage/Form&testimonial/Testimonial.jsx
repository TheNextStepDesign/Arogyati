import React from 'react'
import Caroseltem from '../Carousel/Caroseltem'
import { landingImages } from '@/assets/images-data/landing';

const data = [
    {
      title: "Dummy reviews",
      paragraph: [
        "A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons.",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Dummy reviews",
      paragraph: [
        "A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons.",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Dummy reviews",
      paragraph: [
        "A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons.",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Dummy reviews",
      paragraph: [
        "A testimonial is a first-hand account of someone's experience with a product, service, or company. They are often used in advertising and marketing materials to build trust and credibility with potential customers. When used thoughtfully, testimonials can be one of your most potent marketing weapons.",
      ],
      footer: landingImages.starIcon,
    },
  ];

const Testimonial = () => {
  return (
    <div id='Testimonial' className="md:h-[50%] flex flex-col justify-center items-center ">
          <h1 className="md:text-lg-h2 text-lg-h3 text-customblue font-bold py-5">
            Testimonial
          </h1>
          <div className="md:w-[50%] w-[80%] m-auto md:bg-white md:rounded-tr-[100px] md:rounded-bl-[100px] md:py-10 md:px-5 z-5">
            <Caroseltem isFooter={true} data={data} singleSlide={true} indicator={true} />
          </div>
        </div>
  )
}

export default Testimonial