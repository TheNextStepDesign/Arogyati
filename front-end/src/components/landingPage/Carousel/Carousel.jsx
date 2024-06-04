import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent,CardTitle,CardHeader} from "@/components/ui/card"

const rebios = [
  {title:"1)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"2)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"3)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"4)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"5)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"6)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]}
]

const Slider = () => {
  return (
    <div className="bg-[#dedede]" >
    <div  className="w-[90%] md:w-[70%] 2xl:w-[1440px] m-auto p-10 ">
      <h1 className="text-lg-h2 text-customblue font-bold p-4" >Team Bio - Doctors</h1>
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-[94%] m-auto"
      >
        <CarouselContent  >
          {rebios.map((el,index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
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
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
    </div>
  )
};

export default Slider;
