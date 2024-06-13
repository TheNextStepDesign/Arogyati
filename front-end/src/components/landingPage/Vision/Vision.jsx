import Caroseltem from "../Carousel/Caroseltem";
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
    <div className=" flex items-center py-12 md:py-1 ">
      <div className=" h-[250px]  m-auto" >
        <Caroseltem data={data} shadow={false} singleSlide={true} indicator={true} visionArrow={true} />
      </div>
    </div>
  );
};

export default Vision;
