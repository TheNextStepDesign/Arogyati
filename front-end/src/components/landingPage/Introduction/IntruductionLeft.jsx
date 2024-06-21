import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../comman/customLink";
import CustomH2 from "../comman/CustomHeading";
const lists = ["First Big Private Clinic In Kolhapur.","Having Advance Modalities.","Working For Holistic Approch.","Working Like A Rehabe Center "]

const IntruductionLeft = () => {
  return (
    <div className="lg:w-[50%] w-[100%] flex flex-col gap-5  xl:gap-14">
      <CustomH2>Why choose us?</CustomH2>

      <div className="flex flex-col gap-3 w-[100%] ">
        {lists.map((el,i) => (
          <li className=" " key={i}>{el}</li>
        ))}
        <div className="flex w-[90%]  ">
          <li></li>
          <p className="font-sora">
            Physiotherapy Services For Hospitalized & {"\n"}Bedridden Patients
            At Home.
          </p>
        </div>


      <p className=" text-sm" >
        ( Speech Therapy, Nutritionist, Prosthesis & Orthosis, Residential
        Facility, Psychological Counselling ){" "}
      </p>
      </div>
      <CustomLink href={'/services'} title={"VIEW SERVICES"} />
    </div>
  );
};

export default IntruductionLeft;
