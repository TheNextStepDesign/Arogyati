import { landingImages } from "@/assets/images-data/landing";
import React from "react";

const IntroductionRight = () => {
  return (
    <div className={`relative  md:h-[510px] lg:h-[600px]  2xl:h-[600px] w-[100%] lg:w-[60%] min-[1800px]:w-[600px]   2xl:w-[50%]  md:bg-[url("https://res.cloudinary.com/dw3xsfb9z/image/upload/v1718191357/image2_uvmn9i.png")]  md:bg-cover md:z-[5]`}>
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
