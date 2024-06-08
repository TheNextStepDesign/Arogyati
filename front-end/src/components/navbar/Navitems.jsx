import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { NavLink } from 'react-router-dom'
import ScrollNav from './ScrollNav'



const Navitems = ({navlinks}) => {

// useGSAP(()=>{
//     gsap.from("li,img",{
//         y:20,
//         opacity:0,
//         duration:0.5,
//         stagger:0.2
//     })

// })

  return (
    <div className="hidden w-full lg:block lg:w-auto" id="navbar-default">
        <ul className={"font-medium flex flex-row p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"}>
            {navlinks.map((item,index) => (
                <li key={index} className='overflow-hidden' >
                      <NavLink
                        className={({ isActive }) =>
                          isActive
                            ? "block py-2 px-3 text-white bg-[#406CB4] rounded md:bg-transparent md:text-[#406CB4] md:p-0 dark:text-white md:dark:text-[#406CB4]"
                            : "block py-2 px-3 text-white bg-[#707C3E] rounded md:bg-transparent md:text-[#707C3E] md:p-0 dark:text-white md:dark:text-[#707C3E]"
                        }
                        aria-current="page"
                      >
                        <ScrollNav to={item.to}  >
                          {item.name}
                        </ScrollNav>
                      </NavLink>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Navitems