import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({href,title}) => {
  return (
    <div>
      <Link to={href} className="xl:text-[16px] text-sm underline">
        {title}
      </Link>
    </div>
  );
};

export default CustomLink;
