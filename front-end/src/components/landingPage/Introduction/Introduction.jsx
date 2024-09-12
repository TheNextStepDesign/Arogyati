import { landingImages } from "@/assets/images-data/landing";
import React from "react";
import IntroductionRight from "./IntroductionRight";
import IntruductionLeft from "./IntruductionLeft";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";

const Introduction = () => {
  return (
    <div id="Introduction" className="bg-white md:relative py-5 md:py-1">
      <div className="p-0 md:absolute bg-[#dedede] md:top-0 md:h-20 md:w-[100%] z-0 hidden md:block" >
      </div>
      <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 md:z-10 lg:py-10 2xl:py-8">
          <IntruductionLeft />
          <IntroductionRight />
        </div>
      </div>
      <div className="p-0 md:absolute bg-[#dedede] md:bottom-0 md:h-20 md:w-[100%] z-0 hidden md:block" ></div>
    </div>
  );
};

export default Introduction;
