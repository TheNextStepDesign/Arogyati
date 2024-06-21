import { landingImages } from "@/assets/images-data/landing";
import React, { useRef, useEffect, useState } from 'react';
import AnimationCalendar from "@/assets/lottie/AnimationCalendar.json"
import { FaRegClock } from "react-icons/fa";
import Lottie from 'lottie-react'
import CustomLink from "../comman/customLink";
import CustomH2 from "../comman/CustomHeading";
const OpeningHoures = () => {

  const lottieRef = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Unobserve after first intersection
          }
        });
      },
      {
        threshold: 0.5, // Adjust as needed
      }
    );

    if (lottieRef.current) {
      observer.observe(lottieRef.current);
    }

    return () => {
      if (lottieRef.current) {
        observer.unobserve(lottieRef.current);
      }
    };
  }, []);



  return (
    // <div className="flex flex-col gap-8 2xl:gap-10 bg-white px-1 py-8 rounded-[23px]">
    //   <div className="flex justify-center items-center">
    //     <h1 className="font-bold text-customblue text-lg-h3 md:text-lg-h2 ">
    //       Opening Hours 
    //     </h1>
    //   </div>
    //   <div className="md:h-[85px] w-[90%] md:w-[100%] flex md:justify-evenly md:flex-row md:items-center flex-col justify-center m-auto gap-3 lg:gap-0  lg:text-lg-h3 2xl:text-[28px] ">
    //     <div>
    //       <div className="flex gap-1">
    //         <b>Mon - Sat :</b> <p>10.00 - 02.00pm</p>
    //       </div>

    //       <div className="flex gap-1">
    //         <div className="p-0 opacity-0 block">Mon - Sat:</div>{" "}
    //         <p>04.00pm - 07.00pm</p>
    //       </div>
    //     </div>

    //     <div className="md:w-[1px] 2xl:w-[3px] md:h-[60px] 2xl:h-[80px] bg-black"></div>
    //     <div>
    //       <b>Sunday</b> : Closed
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col md:flex-row gap-6 lg:gap-10 p-5 bg-white rounded-[23px]" >

      <div className="w-[100px] md:w-[120px] lg:w-[150px] 2xl:w-[190px] m-auto md:m-0" ref={lottieRef} >{isVisible && (
        <Lottie
          animationData={AnimationCalendar}
          loop={false}
          autoplay={true}
          style={{ height: '100%', width: '100%' }}
        />
      )}
        
      </div>
      <div className="flex flex-col gap-2 lg:gap-3 xl:gap-5 " >
            <div className="flex items-center gap-1 md:gap-3" >
            <FaRegClock size={'40px'}  className="p-1 md:p-0" color="#406CB4" />
            <CustomH2>Operating Hours</CustomH2>
            </div>
            <div className="xl:text-lg-h3 2xl:text-[28px]" >
              <p><b>We are operational from</b> 10.00 Am - 02.00 Pm & 04.00 Pm - 07.00 Pm</p>
              <p> <b>between</b> Monday to Saturday, <b>Sunday Closed</b></p>
            </div>
            <CustomLink href={'/contact'} title={'CONTACT US'} />

      </div>

    </div>
  );
};

export default OpeningHoures;
