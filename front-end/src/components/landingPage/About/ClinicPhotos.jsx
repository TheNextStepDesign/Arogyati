import { SingleCarosuselData1} from "@/assets/images-data/landing";
import React from "react";
import SingleCarousel from "../Carousel/SingleCarousel";
import CustomH2 from "../comman/CustomHeading";

const ClinicPhotos = () => {
  return (
    <div className="md:w-[50%] w-[100%] flex flex-col">
      <div className="pb-4">
        {/* <CustomH2>Clinic Photos</CustomH2> */}
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
