import { serviceFacalityImages } from "@/assets/images-data/landing";
import ServicesCard from "@/components/Services/OurServices/ServicesCard";
import ConditionTreated from "@/components/Services/conditionTreated/ConditionTreated";
import Facilities from "@/components/Services/facilities/Facilities";

import { Parallax } from "react-parallax";
import FrontPoster from "@/components/landingPage/frontposter/FrontPoster";
import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Arogyati | Services";
  }, []);

  return (
    <>
      <FrontPoster
        img={serviceFacalityImages.frontPoster}
        img2={serviceFacalityImages.frontPosterMob}
      />

      <ServicesCard />

      <ConditionTreated />

      <Facilities />
    </>
  );
};

export default Services;
