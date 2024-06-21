import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../comman/customLink";
const services = [
  "Psychological Counselling",
  "Dietitian Advice",
  "Physiotherapy Services For Hospitalized & Bedridden Patients At Home",
  "Speech Therapy",
  "Prosthesis & Orthosis",
  "Super Induction Therapy",
  "Cupping And Dry Needling Taping", 
];
const Rightside = () => {
  return (
    <div className="md:w-[50%] w-full flex flex-col justify-start items-left  md:justify-start z-5 ">
      <div className="w-full  flex flex-col m-auto   justify-between md:py-0 py-5 gap-7">
        <h1 className="md:text-lg-h2 text-lg-h3 font-bold text-customblue">
          Our Services
        </h1>

        <div className="flex flex-col gap-2 w-[100%]">
          {services.map((el, i) => (
            <div key={i} className="flex ">
              <li></li>
              <p className="font-sora">{el}</p>
            </div>
          ))}
        </div>
        <CustomLink href={'/services'} title={"VIEW SERVICES"}/>
      </div>
    </div>
  );
};

export default Rightside;
