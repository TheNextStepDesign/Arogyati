import React from "react";
import Form from "./Form";
import Testimonial from "./Testimonial";
import { laptopWidth, mobileWidth, monitorWidth } from "@/lib/css";



const FormTestimonial = () => {
  return (
    <div className="bg-[#dedede] relative overflow-hidden py-5 md:py-0 md:pb-10">
      <div className={`md:h-[1000px] flex flex-col justify-between gap-5`}>
        <Form/>
        <Testimonial/>
      </div>
      {/* <img src={landingImages.greenSvg}  alt="green-svg" className='p-0 rotate-180 absolute left-[-1200px] bottom-[-1010px] z-0' /> */}
    </div>
  );
};

export default FormTestimonial;
