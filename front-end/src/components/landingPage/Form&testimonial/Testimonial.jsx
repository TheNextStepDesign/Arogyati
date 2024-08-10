import React from 'react'
import Caroseltem from '../Carousel/Caroseltem'
import { landingImages } from '@/assets/images-data/landing';

const data = [
    {
      title: "Nalini Sheth",
      paragraph: [
        "I had an shoulder pain for 2 weeks and couldn't move due to severe pain and rigidness thanks to Dr Pranjali Dhamane mam due to her help I have no pain and got better. They have very much advance technologies like Matrix, laser magnetodyn. Thank you so much to her team too",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Sujata Nagavkar",
      paragraph: [
        "Both doctors and staff are very helping and caring nature. they explain u what the problem is  and how patient should take care of them self. Plus they are providing weekly assistance. Thank you all.",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Soham Khamkar",
      paragraph: [
        "I would highly recommend institute of physiotherapy and rehabilitation centre. I was having S I joint since 10 days, Dr pranjali patiently heard my issues then she explained me the problem and accordingly suggested me the line of the treatment. So after 10 days of treatment I felt relief. I can play football. So thank you mam",
      ],
      footer: landingImages.starIcon,
    },
    {
      title: "Shashi Doshi",
      paragraph: [
        "I was coming for my back pain. Pain was since 6 months .after taking treatment here I feel Better . They have given me matrix rhythm therapy, laser, and all exercises. Now I'm much more. Better. \nThank you Dr pranjali ma'am and their team.",
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