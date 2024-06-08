import React, { useState } from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";
import Manubtn from "./Manubtn";
import Manubar from "./Manubar";
import Headroom from "react-headroom";

const navlinks = [
  { to: "Introduction", name: "Introduction" },
  { to: "About", name: "About" },
  { to: "Services", name: "Services" },
  { to: "Form", name: "Form" },
  { to: "Testimonial", name: "Testimonial" },
  { to: "Contact", name: "Contact Us" },
];

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => {
    settoggle(!toggle);
  };


  return (
    <Headroom className="relative z-30">
      <nav className="dark:bg-gray-900 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg">
        <div className="flex items-center justify-between py-5 w-[90%] lg:w-[70%] m-auto 2xl:w-[1440px]">
          <Logo />
          <Manubtn handleToggle={handleToggle} />
          <Navitems navlinks={navlinks} />
        </div>
      </nav>

      {toggle ? (
       <Manubar navlinks={navlinks} handleToggle={handleToggle} />
      ) : null}
    </Headroom>
  );
};

export default Navbar;
