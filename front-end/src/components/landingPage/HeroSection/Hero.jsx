import { landingImages } from "@/assets/images-data/landing";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:pt-[80px] pt-[20px]">
      <div className="md:w-[50%] w-[100%]">
        <img
          width="100%"
          className="m-auto rounded-lg"
          src={landingImages.image1}
          alt="image1"
        />
      </div>
      <div className="md:w-[50%] w-[100%] flex md:flex-col flex-col-reverse justify-evenly gap-5 ">
        <div className="p-0 md:text-lg-h3">
          Well Equipped Physiotherapy Ceter With Ultra Modern{" "}
          <b>German Technologies First Time In Kolhapur.</b>
        </div>
        <pre className="inline-block md:text-lg-h1 text-lg-h3 font-sora md:leading-[65px] font-bold text-customgreen">
          WORKING {"\n"}FOR ILNESS TO{"\n"}WELLNESS.
        </pre>
      </div>
    </div>
  );
};

export default Hero;
