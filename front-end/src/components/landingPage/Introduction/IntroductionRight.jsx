import { landingImages } from "@/assets/images-data/landing";
import React from "react";

const IntroductionRight = () => {
  return (
    <div className="relative lg:w-[50%] md:h-[510px] 2xl:h-[700px] w-[100%] md:bg-[url('./images/image2.png')]  md:bg-cover md:z-[5] ">
      <img
        width={"80%"}
        className="m-auto md:hidden z-0"
        src={landingImages.image2}
        
        alt="image2"
      />
      
    </div>
  );
};

export default IntroductionRight;
