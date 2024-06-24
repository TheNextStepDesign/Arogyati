import React from 'react';
import  '@/App.css';

const Parallax = ({ bgImage,children}) => {
  return (

    <div>

        <div
        className={`hidden md:block md:pb-[130%] lg:pb-[78%] xl:pb-[55%] 2xl:pb-[45%] bg-fixed bg-center bg-no-repeat bg-cover relative w-full h-0`}
        style={{ backgroundImage: `url(${bgImage})` }}
        >

        {children}
        
        </div>
        <div className='md:hidden bg-[#dedddd]' >
        {children}
        </div>
        </div>
  );
};

export default Parallax;
