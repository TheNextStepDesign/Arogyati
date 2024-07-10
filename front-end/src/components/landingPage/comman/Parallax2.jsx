import React from 'react';
import  '@/App.css';

const Parallax2 = ({ bgImage,children }) => {
  return (

    <div>

        <div
        className={`hidden md:block md:pb-[79%] lg:pb-[71%] xl:pb-[40%] min-[1600px]:pb-[28%] 2xl:pb-[38%] bg-fixed bg-center bg-no-repeat bg-cover relative w-full h-0`}
        style={{ backgroundImage: `url(${bgImage})` }}
        >

        {children}
        
        </div>
        <div className='md:hidden bg-[#dedede97]' >
        {children}
        </div>
        </div>
  );
};

export default Parallax2;