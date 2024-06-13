import { landingImages } from "@/assets/images-data/landing";
import React from "react";
import HeroLift from "./HeroLift";
import HeroRight from "./HeroRight";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 2xl:gap-20 md:pt-[80px] pt-[20px]">
      <HeroLift/>
      <HeroRight/>
    </div>
  );
};

export default Hero;
