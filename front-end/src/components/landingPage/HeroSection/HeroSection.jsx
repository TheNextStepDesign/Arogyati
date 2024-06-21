import React from "react";
import OpeningHoures from "./OpeningHoures";
import Hero from "./Hero";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";

const HeroSection = () => {
  return (
    <div className="bg-[#dedede] py-[20px] lg:py-[80px] ">
      <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
        <OpeningHoures />
        <Hero />
      </div>
    </div>
  );
};

export default HeroSection;
