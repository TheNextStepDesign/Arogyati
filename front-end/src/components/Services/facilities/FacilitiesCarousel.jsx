import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import React, { useState } from "react";

const FacilitiesCarousel = ({data,visionArrow,singleSlide}) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
  
    return (

    <div>

    
    <Carousel
      opts={{
        align: "start",
      }}
      
     
    >
      <CarouselContent className="p-2 ">
        {data.map((el, index) => (
          <CarouselItem
            key={index}
            className={singleSlide ? "" : "sm:basis-1/2 lg:basis-1/3"}
          >
            <div  >
              <Card className="bg-[#cbcaca] h-[350px]   px-5 py-10 flex flex-col gap-5 hover:shadow-[#7D8E39] hover:shadow-lg">
                <Card className="w-[150px] h-[150px] ">
                  <img src={el.img}  alt="ong-eg" className="p-0 object-cover w-full h-full rounded-2xl transform transition-transform duration-300 hover:scale-125"  />
                </Card>

                <div >
                  <h3 className="text-[22px] font-bold">{el.title}</h3>
                </div>
                <div >
                  <p>
                    {el.des}
                  </p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious
        className={
          visionArrow
            ? "left-5 md:-left-10 lg:-left-20  2xl:-left-[40%]"
            : "-left-5 lg:-left-12"
        }
      />
      <CarouselNext
        className={
          visionArrow
            ? "right-5 md:-right-10 lg:-right-20 2xl:-right-[40%]"
            : "-right-5 lg:-right-12"
        }
      />
    </Carousel>
   
    </div>
  );
};

export default FacilitiesCarousel;
