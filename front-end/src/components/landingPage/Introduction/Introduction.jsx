import { landingImages } from "@/assets/images-data/landing";
import React from "react";
import IntroductionRight from "./IntroductionRight";
import IntruductionLeft from "./IntruductionLeft";

const Introduction = () => {
  return (
    // <div className="bg-white lg:mt-[-20px] ">

    //   <div  >
    //     <div className='bg-[#dedede] lg:py-[80px] py-3 hidden lg:block ' >
    //     </div>
    //     <div className='w-[90%] lg:w-[70%] 2xl:w-[1440px] m-auto'>

    //         <div className='flex flex-col md:flex-row items-center gap-8 md:pt-[80px] pt-[20px] lg:mt-[-240px]' >
    //             <div className="lg:w-[50%] w-[100%] flex flex-col" >
    //                 <div className='md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3' >
    //                     Introduction
    //                 </div>
    //                 <div className='flex flex-col gap-2 w-[100%]  ' >
    //                     {
    //                         lists.map(el=>(<li >{el}</li>))
    //                     }
    //                     <div className='flex w-[90%]' >
    //                         <li ></li>
    //                         <p className='font-sora' >Physiotherapy Services For Hospitalized & {"\n"}Bedridden Patients At Home.</p>
    //                     </div>
    //                 </div>
    //                 <p>( Speech Therapy, Nutritionist, Prosthesis & Orthosis, Residential Facility, Psychological Counselling ) </p>

    //             </div>
    //             <div lassName="lg:w-[50%] w-[100%]">
    //                 <img width={"100%"} className='m-auto' src={landingImages.image2} alt="image2" />
    //             </div>
    //         </div>
    //     </div>
    //     <div className='bg-[#dedede] lg:py-[120px] lg:mt-[-150px] hidden lg:block' >
    //     </div>
    //     </div>

    // </div>

    <div id="Introduction" className="bg-white md:relative py-5 md:py-1">
      <div className="p-0 md:absolute bg-[#dedede] md:top-0 md:h-20 md:w-[100%] z-0 hidden md:block" >
      </div>
      <div className="w-[90%] lg:w-[70%] 2xl:w-[1440px] m-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:z-10">
          <IntruductionLeft />
          <IntroductionRight />
        </div>
      </div>
      <div className="p-0 md:absolute bg-[#dedede] md:bottom-0 md:h-20 md:w-[100%] z-0 hidden md:block" ></div>
    </div>
  );
};

export default Introduction;
