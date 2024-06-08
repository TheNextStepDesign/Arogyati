import React from "react";
import OpeningHoures from "./OpeningHoures";
import Hero from "./Hero";

const HeroSection = () => {
  return (
    <div className="bg-[#dedede] py-[20px] lg:py-[80px] ">
      <div className="w-[90%] lg:w-[70%] 2xl:w-[1440px] m-auto ">
        <OpeningHoures />
        <Hero />
      </div>
    </div>
  );
};

export default HeroSection;
