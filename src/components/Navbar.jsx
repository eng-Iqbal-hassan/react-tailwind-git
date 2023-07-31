import React, { useState } from 'react'
import {close, logo, menu} from "../assets"
import { navLinks } from "../constants"
const Navbar = () => {
  const [toggle, setToggle] = useState (false);
  return (
    <nav className="w-full flex justify-between items-center py-6 navbar ">
      <img src={logo} alt="Hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex gap-[40px] hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins text-[16px] font-normal cursor-pointer text-white`}
          >
            <a href="{`#${nav.id}`}">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 items-center justify-end">
        <img src={ toggle ? close: menu} alt="menu" className="w-[28px] h-[28px] object-contain"
        onClick={()=> setToggle((prev) => !prev)} />

        <div
          className={`${toggle ? "flex" : "hidden"} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex gap-[16px] flex-col justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
          key={nav.id}
          className={`font-poppins text-[16px] font-normal cursor-pointer text-white`}
          >
            <a href="{`#${nav.id}`}">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>
        </div>

      </div>
      
    </nav>
  )
}

export default Navbar
