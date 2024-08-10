import React, { useState } from "react";
import Logo from "./Logo";
import Manubtn from "./Manubtn";
import Manubar from "./Manubar";
import Headroom from "react-headroom";
import { useLocation } from "react-router-dom";
import { Navitems, Navitems1 } from "./Navitems";

const navlinks = [
  { to: "Introduction", name: "Introduction" },
  { to: "About", name: "About" },
  { to: "services", name: "Services" },
  { to: "Form", name: "Form" },
  { to: "Testimonial", name: "Testimonial" },
  { to: "contact", name: "Contact Us" },
];

const navlinks1 = [
  { to: "services", name: "Services" },
  { to: "contact", name: "Contact Us" },
];

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const {pathname} = useLocation();

  

  const handleToggle = () => {
    settoggle(!toggle);
  };


  return (
    <Headroom className="relative z-30">
      <nav className="dark:bg-gray-900 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-between py-5 w-[90%] lg:w-[80%] m-auto min-[1800px]:w-[1640px] 2xl:w-[1200px]">
          <Logo />
          <Manubtn handleToggle={handleToggle} />

          {/* {

            pathname != '/'?<Navitems1 navlinks1={navlinks1} />:<Navitems navlinks={navlinks} />


          } */}
          <Navitems1 navlinks1={navlinks1}/>
          

        </div>
      </nav>

      {toggle ? (
       <Manubar navlinks={navlinks} handleToggle={handleToggle} />
      ) : null}
    </Headroom>
  );
};

export default Navbar;
