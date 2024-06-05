import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  import { Card, CardContent,CardTitle,CardHeader, CardFooter} from "@/components/ui/card"
  

const Caroseltem = ({isFooter, data}) => {
  return (
    <Carousel
        opts={{
          align: "start",
        }}
        className="z-1"
      >
        <CarouselContent >
          {data.map((el,index) => (
            <CarouselItem key={index} className={isFooter?"":"md:basis-1/2 lg:basis-1/3"}>
              <div className="p-1">
                <Card className='p-5' >
                  <CardHeader>
                    <CardTitle className="md:text-lg-h3" >{el.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-2 p-5">
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
  )
}

export default Caroseltem