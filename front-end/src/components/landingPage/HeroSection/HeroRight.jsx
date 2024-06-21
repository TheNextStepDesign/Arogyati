import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../comman/customLink";

const HeroRight = () => {
  return (
    <div className="md:w-[50%] w-[100%] flex md:flex-col flex-col justify-evenly gap-5 ">
      <div className="p-0 xl:text-lg-h3 2xl:text-[28px]">
        Well Equipped Physiotherapy Ceter With Ultra Modern{" "}
        <b>German Technologies First Time In Kolhapur.</b>
      </div>
      <pre className="inline-block lg:text-lg-h2 text-lg-h3 2xl:text-lg-h1 font-sora lg:leading-[35px] 2xl:leading-[60px] font-bold text-customgreen">
        WORKING {"\n"}FOR {"\n"}WELLNESS.
      </pre>
      <CustomLink href={'/services'} title={"VIEW SERVICES"} />
    </div>
  );
};

export default HeroRight;
