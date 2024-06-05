import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const SingleCarousel = ({images}) => {
    return (
        <Carousel opts={{
          align: "start",
        }}
        
  
        >
          <CarouselContent >
            {images.map((img, index) => (
              <CarouselItem key={index}>
                <div>
                  <img src={img} alt={index+img} width='100%' />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious  down = {true}/>
          <CarouselNext down = {true}/>
        </Carousel>
      )
}

export default SingleCarousel