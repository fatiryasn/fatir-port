import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ onPress }) => {
  const handleClick = (info)=> {
    onPress(info)
  }
  return (
    <div className="borderbg mt-48 md:mt-0 md:mr-10 p-2 shadow-2xl md:self-end hover:rounded-3xl duration-300">
      <div className="flex gap-12 bg-slate-50 font-mooli font-semibold  px-6 py-4 justify-center ">
        <button className=" hover:text-cyan-400 transition duration-500 text-sm md:text-base" onClick={()=> handleClick("ABOUT")}>
          <FontAwesomeIcon icon={faUser} /> About
        </button>
        <button className=" hover:text-cyan-400 transition duration-500 text-sm md:text-base" onClick={()=> handleClick("SKILLS")}>
          Skills
        </button>
        <button className=" hover:text-cyan-400 transition duration-500 text-sm md:text-base" onClick={()=> handleClick("PROJECTS")}>
          Projects
        </button>
      </div>
    </div>
  );
};

export default Navbar;
