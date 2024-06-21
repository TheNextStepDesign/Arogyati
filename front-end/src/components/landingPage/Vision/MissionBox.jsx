import React from "react";

const MissionBox = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-white sm:absolute sm:bottom-0 sm:left-0 sm:w-[57%] sm:h-[240px] p-5 md:p-8 sm:rounded-bl-[40px] rounded-tr-[30px] ">
      <h2 className="text-lg-h3 md:text-lg-h2 text-customblue font-bold">
        Our Mission
      </h2>
      <p className="md:text-[20px] text-center">
        Spread physio awareness, and provide advanced treatments for faster
        recovery of patients, with quality service & holistic approach
      </p>
    </div>
  );
};

export default MissionBox;
