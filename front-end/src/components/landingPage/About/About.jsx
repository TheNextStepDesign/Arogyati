import { landingImages } from "@/assets/images-data/landing";
import React from "react";
const lists = ["16 Nov 2007 Clinic Inuagrated.","First In Kolhapur Private Rehab Center.","Advanced Modalities","2007 Mentamove.","2009 Matrix Rhythm Therapy.","2016 Magnetodyn.","2019 Class Iv Laser."," 2024 Super Induction System."]
const About = () => {
  return (
    <div className="bg-[#dedede] md:mt-[-140px] py-5 md:pb-10 ">
      <div className="w-[90%] md:w-[70%] 2xl:w-[1440px] m-auto">
        <h1 className="p-0 text-lg-h2 text-customgreen md:text-lg-h1 font-bold" >About</h1>
        <div className="flex flex-col md:flex-row  gap-2 pt-[40px]">
          <div className="md:w-[50%] w-[100%] flex flex-col">
            <div className="md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3">
            Clinic History
            </div>
            <ol className="flex flex-col gap-3 w-[80%] md:text-lg-h3 ">
              {lists.map((el,i) => (
                <li className={i%2==0?"bg-white":null} >{i+1+". "+el}</li>
              ))}
    
            </ol>
          
          </div>
          <div lassName="md:w-[50%] w-[100%] flex flex-col">
          <div className="md:text-lg-h2 text-customblue font-bold pb-4 text-lg-h3">
          Clinic Photos
            </div>
            <img
              width={"70%"}
              className="p-0 object-cover"
              src={landingImages.image3}
              alt="image2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
