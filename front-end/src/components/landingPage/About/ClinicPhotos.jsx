import { SingleCarosuselData1} from "@/assets/images-data/landing";
import React from "react";
import SingleCarousel from "../Carousel/SingleCarousel";

const ClinicPhotos = () => {
  return (
    <div className="md:w-[50%] w-[100%] flex flex-col">
      <div className="md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3">
        Clinic Photos
      </div>
      <div className="w-[100%]" >
        < SingleCarousel images={SingleCarosuselData1} />
      </div>
      {/* <img
        width={"70%"}
        className="p-0 object-cover"
        src={landingImages.image3}
        alt="image2"
      /> */}
    </div>
  );s
};

export default ClinicPhotos;
