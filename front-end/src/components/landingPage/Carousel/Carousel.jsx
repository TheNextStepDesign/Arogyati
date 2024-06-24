import React from "react";
import Caroseltem from "./Caroseltem";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";
import BioCard from "./BioCard";
import { landingImages } from "@/assets/images-data/landing";
import CustomH2 from "../comman/CustomHeading";

const rebios = [
  {title:"1) Dr. JHARANA DESAI",paragraph:["Graduated with a Bachelor of Physiotherapy in 2008 from Vijayalaxmi Institute of Physiotherapy, Rajiv Gandhi University, Mangalore. Completed a Post Graduate Diploma in Diet and Nutrition in 2011.","Has attended workshops in Manual Therapy, Kinesiology Taping, and Matrix Rhythm Therapy.","Has 14 years of experience in the field of physiotherapy and self-diet consultation."]},
  {title:"2) Dr. Mayuri Shinde",paragraph:["Graduated with a Bachelor of Physiotherapy on January 5, 2024, from Krishna College of Physiotherapy, Krishna Vishwavidyapith, Karad."]},
  {title:"3) Dr. Tanisha Patil",paragraph:["Graduated in 2023 from Pravara Medical College and is pursuing MPTh from Dr. D.Y. Patil College of Physiotherapy."]},
  {title:"4) Dr. Dilip More",paragraph:["15 years of experience in the field of physiotherapy. Well-versed in handling patients. Skilled in Matrix Rhythm Therapy, mobilization, manipulation therapy, exercise, and electrotherapy."]},
  {title:"5) Dr. Uday Kore",paragraph:["11 years of experience in the field of physiotherapy, fitness coaching, and gym training. Skilled in treating sports-related injuries. District-level gold medalist in bodybuilding."]},
  {title:"6) Dr. Dr. Purva More",paragraph:["Graduated from Dr. D.Y. Patil Engineering College in 2015. 7 years of experience in clinic management, handling patient appointments, accounting, and managing the administrative department."]},
  {title:"7) Dr. Akash Supekar",paragraph:["Graduated from New College, Kolhapur (Commerce) in 2019. 6 years of experience in marketing and social media handling, along with patient management when required. Completed Tally ERP 9 from Disha Institute."]},
  {title:"8) Dr. Aanand Patil",paragraph:["4 years of experience in the field of physiotherapy. Handles patient care, home visits, and hospital visits. Skilled in electrotherapy."]}
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
