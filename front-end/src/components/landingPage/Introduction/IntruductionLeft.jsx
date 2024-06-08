import React from "react";
const lists = ["First Big Private Clinic In Kolhapur.","Having Advance Modalities.","Working For Holistic Approch.","Working Like A Rehabe Center "]

const IntruductionLeft = () => {
  return (
    <div className="lg:w-[50%] w-[100%] flex flex-col">
      <div className="md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3">
        Introduction
      </div>
      <div className="flex flex-col gap-2 w-[100%]  ">
        {lists.map((el,i) => (
          <li key={i}>{el}</li>
        ))}
        <div className="flex w-[90%]">
          <li></li>
          <p className="font-sora">
            Physiotherapy Services For Hospitalized & {"\n"}Bedridden Patients
            At Home.
          </p>
        </div>
      </div>
      <p>
        ( Speech Therapy, Nutritionist, Prosthesis & Orthosis, Residential
        Facility, Psychological Counselling ){" "}
      </p>
    </div>
  );
};

export default IntruductionLeft;
