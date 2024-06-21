import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";
import Caroseltem from "../Carousel/Caroseltem";
import { Link } from "react-router-dom";
import CustomLink from "../comman/customLink";
import MissionBox from "./MissionBox";
import VisionBox from "./VisionBox";
const data = [
  {
    title: "Our Vision",
    paragraph: ["Illness To Wellness", "Serving Society", "Wellbeing For All"],
  },
  {
    title: "Our Mission",
    paragraph: [
      "Quality Service",
      "Holistic Approach",
      "Physio Awareness",
      "Providing Advance Treatments For Faster Recovery Of Patients",
    ],
  },
];
const Vision = () => {
  return (
    // <div className=" flex items-center py-12 md:py-1  ">
    //   <div className=" h-[250px]  m-auto" >
    //     <Caroseltem data={data} shadow={false} singleSlide={true} indicator={true} visionArrow={true} />
    //   </div>
    // </div>
    <div className="bg-[#dedede] py-2 md:py-10">
      <div
        className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto flex flex-col gap-5 sm:gap-10 md:gap-20`}
      >
        <div className="w-[70%] m-auto sm:relative  sm:h-[400px] ">
          <MissionBox />
          <VisionBox />
        </div>

        <div className="w-[80%] m-auto text-center ">
          <h2 className="text-lg-h3 md:text-lg-h2 text-customblue font-bold pb-5">
            First Well Equipped Physiotherapy Center With Ultra Modern German
            Technologies in Kolhapur
          </h2>
          <CustomLink href={"/contact"} title={"CONTACT US"} />
        </div>
      </div>
    </div>
  );
};

export default Vision;
