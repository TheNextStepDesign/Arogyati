import React from "react";
import Form from "./Form";
import Testimonial from "./Testimonial";

const FormTestimonial = () => {
  return (
    <div className="bg-[#dedede] relative overflow-hidden py-5 md:py-0 md:pb-10">
      <div className={`md:h-[1000px] flex flex-col justify-between gap-5`}>
        <Form/>
        <Testimonial/>
      </div>
      
    </div>
  );
};

export default FormTestimonial;
