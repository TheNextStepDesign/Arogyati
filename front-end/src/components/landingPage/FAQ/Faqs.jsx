import React from 'react'

import AccordionBox from './Accordion'
import { laptopWidth, mobileWidth, monitorWidth } from '@/lib/css'

const Faqs = () => {
  return (
    <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto py-20`} >
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