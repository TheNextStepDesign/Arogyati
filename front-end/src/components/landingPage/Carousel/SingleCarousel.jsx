// import React from 'react'
// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


// const SingleCarousel = ({images}) => {
//     return (
//         <Carousel opts={{
//           align: "start",
//         }}
//         >
//           <CarouselContent >
//             {images.map((img, index) => (
//               <CarouselItem key={index}>
//                 <div>
//                   <img src={img} alt={index+img} width='100%' />
//                 </div>
//               </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselPrevious  down = {true}/>
//           <CarouselNext down = {true}/>
//         </Carousel>
//       )
// }

// export default SingleCarousel


import React, { useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const SingleCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
        }}
        onSelect={(index) => setSelectedIndex(index)}
        
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index} >
              <div>
                <img src={img} alt={index + img} width='100%' className='p-0 object-contain' />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious down={true} /> */}
        {/* <CarouselNext down={true} /> */}
      </Carousel>
      {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${selectedIndex === index ? 'bg-black' : 'bg-gray-400'}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div> */}
    </div>
  )
}

export default SingleCarousel
