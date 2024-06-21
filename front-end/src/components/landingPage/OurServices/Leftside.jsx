import { SingleCarosuselData2 } from '@/assets/images-data/landing'
import React from 'react'
import SingleCarousel from '../Carousel/SingleCarousel'

const Leftside = () => {
  return (
    <div className='md:w-[50%] ' >
        < SingleCarousel images={SingleCarosuselData2} />
    </div>
  )
}

export default Leftside