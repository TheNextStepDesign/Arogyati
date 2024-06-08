import { landingImages } from "@/assets/images-data/landing";
import React from "react";

const HeroLift = () => {
  return (
    <div className="md:w-[50%] w-[100%]">
      <img
        width="100%"
        className="m-auto rounded-lg"
        src={landingImages.image1}
        alt="image1"
      />
    </div>
  );
};

export default HeroLift;
