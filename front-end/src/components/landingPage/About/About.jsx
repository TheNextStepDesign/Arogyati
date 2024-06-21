import { landingImages } from "@/assets/images-data/landing";
import React from "react";
import ClinicHistory from "./ClinicHistory";
import ClinicPhotos from "./ClinicPhotos";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";

const About = () => {
  return (
    <div id="About" className="bg-[#dedede] py-5 md:pb-10 ">
      <div className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
        <h1 className="p-0 text-lg-h2 text-customgreen md:text-lg-h1 font-bold" >About</h1>
        <div className="flex justify-between flex-col md:flex-row gap-5 md:gap-3   pt-[40px]">
          <ClinicHistory/>
          <ClinicPhotos/>
        </div>
      </div>
    </div>
  );
};

export default About;
