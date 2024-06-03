import React, { useState } from "react";
import Logo from "./Logo";
import Navitems from "./Navitems";
import Manubtn from "./Manubtn";
import { NavLink } from "react-router-dom";
import Manubar from "./Manubar";

const navlinks = [
  { href: "/", name: "Introduction" },
  { href: "/about", name: "About" },
  { href: "/services", name: "Services" },
  { href: "/form", name: "Form" },
  { href: "/testimonial", name: "Testimonial" },
  { href: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [toggle, settoggle] = useState(false);

  const handleToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div>
      <nav classNameName="dark:bg-gray-900">
        <div className="flex items-center justify-between py-5 w-[90%] m-auto 2xl:w-[1440px]">
          <Logo />
          <Manubtn handleToggle={handleToggle} />
          <Navitems navlinks={navlinks} />
        </div>
      </nav>

      {toggle ? (
       <Manubar navlinks={navlinks} handleToggle={handleToggle} />
      ) : null}
    </div>
  );
};

export default Navbar;
