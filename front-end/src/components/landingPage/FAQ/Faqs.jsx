import React from 'react'

import AccordionBox from './Accordion'

const Faqs = () => {
  return (
    <div className='w-[90%] md:w-[70%] 2xl:w-[1440px] m-auto py-20' >
        <div className='flex flex-col m-auto text-center gap-10' >
            <h1 className='p-0 text-customblue md:text-lg-h2 text-lg-h3 font-bold ' >
            FAQs
            </h1>
            <div>
                <AccordionBox/>
            </div>
        </div>

    </div>
  )
}

export default Faqs