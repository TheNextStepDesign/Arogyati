import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent,CardTitle,CardHeader, CardFooter} from "@/components/ui/card"
import { useState } from "react";
  

const Caroseltem = ({isFooter,data,shadow, singleSlide,indicator}) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (

    <div>

    
    <Carousel
        opts={{
          align: "start",
        }}
        
        onSelect={(index) => setSelectedIndex(index)}
      >
        <CarouselContent className='' >
          {data.map((el,index) => (
            <CarouselItem key={index} className={singleSlide?"":"md:basis-1/2 lg:basis-1/3"}>
              <div className="p-1">
                <Card className={`p-5 ${shadow?"shadow-md":"shadow-none border-none"}`} >
                  <CardHeader className='pb-5' >
                    <CardTitle className="md:text-lg-h3" >{el.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 pb-1">
                      {
                        el.paragraph.map((des,i)=>(<p key={i} >{des}</p>))
                      }
                  </CardContent>
                  {
                    isFooter?<CardFooter>
                    <img src={el.footer} width="150" alt="" />
                  </CardFooter>:null
                  }
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious  className='-left-5 md:-left-12' />
        <CarouselNext className='-right-5 md:-right-12'/>
      </Carousel>

      {
        indicator?<div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {data.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${selectedIndex === index ? 'bg-[#7D8E39]' : 'bg-gray-200'}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>:null
      }

      </div>
  )
}

export default Caroseltem