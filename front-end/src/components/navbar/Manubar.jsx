import { NavLink } from "react-router-dom"
import ScrollNav from "./ScrollNav"

const Manubar = ({navlinks,handleToggle}) => {
  return (
         <div
          id="nav-manu"
          className="h-[100vh] w-[300px] fixed top-0 right-0 p-5 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg"
        >
          <div onClick={handleToggle} className="p-1 absolute right-5 bg-white top-4 w-8 rounded-full cursor-pointer">
            <img className="w-[100%]" src="./icons/close-icon.svg" alt="close-icon" />
          </div>
          <div className="flex flex-col gap-3">
            {navlinks.map((item,index) => (
              <NavLink
              to={item.to}
                key={index}
                className={({ isActive }) =>
                  isActive
                    ? "block py-2 px-3 text-[#406CB4]  rounded md:bg-transparent md:text-[#406CB4]  dark:text-white md:dark:text-[#406CB4]"
                    : "block py-2 px-3 text-[#707C3E]  rounded md:bg-transparent md:text-[#707C3E]  dark:text-white md:dark:text-[#707C3E]"
                }
                aria-current="page"
              >
                {/* <ScrollNav to={item.to}   > */}
                  <p onClick={handleToggle} >

                          {item.name}
                  </p>
                {/* </ScrollNav> */}
              </NavLink>
            ))}
          </div>
        </div>
  )
}

export default Manubar