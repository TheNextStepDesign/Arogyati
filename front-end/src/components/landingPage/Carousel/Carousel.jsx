import React from "react";
import Caroseltem from "./Caroseltem";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";
import BioCard from "./BioCard";
import { landingImages } from "@/assets/images-data/landing";
import CustomH2 from "../comman/CustomHeading";

const rebios = [
  {title:"1)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"2)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"3)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"4)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"5)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]},
  {title:"6)  Dr. Pranjali Dhamane",paragraph:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]}
]

const data = [{img:landingImages.doctorImg1,name:"Dr. Pranjali Dhamane",descriptions:["Having An Experience Of 24 Years In This Field, Passed Out In Year 1997 From Government Medical College Nagpur.","In Her 24 Years Of Experience She Initially Worked In Rotary Club And Then After 11 Years She Opened Her Own Clinic “ Institute Of Physiotherapy And Rehabilitation ” In Shahupuri , Which Is Going Strong Till Now.","In 2022 She Have  Acquired Fomt ( Fellowship In Osteopathy And Manipulative Therapy ), And Diploma In Osteopathy In Ontario University In Canada."]},{img:landingImages.doctorImg2,name:"Dr. Manisha Jain",descriptions:["Passed Out Bachelor Of Physiotherapy In The Year 2021 From Acharya Institute Of Physiotherapy College, Rajiv Gandhi University,  Bangalore","Completed Masters Of Physiotherapy In Neurological Science In 2023 From Goutam College Of Physiotherapy, Rajiv Gandhi University Bangalore","Have Done Workshop In Fimt (Federation Of Indian Manual Therapy) And Matrix Rhythm Therapy, Holding Clinical Experience Of 1.5yrs"]}]

const Slider = () => {
  return (
    <div className="bg-[#dedede] pb-10 md:pb-20" >
    <div  className={`w-[${mobileWidth}] lg:w-[${laptopWidth}] 2xl:w-[${monitorWidth}] m-auto`}>
      <div className="pb-4" >
        <CustomH2>Team Bio - Doctors</CustomH2>  
      </div>
      <BioCard data={data} />
      <Caroseltem data={rebios} shadow={true} />
    </div>
    </div>
  )
};

export default Slider;
