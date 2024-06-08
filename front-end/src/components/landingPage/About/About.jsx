import { landingImages } from "@/assets/images-data/landing";
import React from "react";
import ClinicHistory from "./ClinicHistory";
import ClinicPhotos from "./ClinicPhotos";
const About = () => {
  return (
    <div id="About" className="bg-[#dedede] py-5 md:pb-10 ">
      <div className="w-[90%] md:w-[70%] 2xl:w-[1440px] m-auto">
        <h1 className="p-0 text-lg-h2 text-customgreen md:text-lg-h1 font-bold" >About</h1>
        <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-0  pt-[40px]">
          <ClinicHistory/>
          <ClinicPhotos/>
        </div>
      </div>
    </div>
  );
};

export default About;
