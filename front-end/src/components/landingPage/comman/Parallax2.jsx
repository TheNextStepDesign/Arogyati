import React from 'react';
import  '@/App.css';

const Parallax2 = ({ bgImage,children }) => {
  return (

    <div>

        <div
        className={`hidden md:block md:pb-[79%] lg:pb-[61%] xl:pb-[41%] 2xl:pb-[33%] bg-fixed bg-center bg-no-repeat bg-cover relative w-full h-0`}
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