import React from "react";
import bg from "../assets/border.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faLocationDot,
  faSchool,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div className="relative w-72 mt-16 md:mt-0">
      <img
        src={bg}
        alt=""
        className="h-24 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      ></img>
      <div className="border-2 border-black flex flex-col items-center bg-slate-50 mt-2 rounded-t-2xl p-5">
        <h1 className="font-poppins font-bold text-xl text-center lg:text-2xl mt-8 self-center">
          Fatir Ahmad Yasin
        </h1>
        <p className="mt-3 font-quicksand text-center text-sm">
          High level curiosity, thirsty of learning new things and trying my
          best.
        </p>
        <div className="text-yellow-800 mt-5 text-start font-quicksand text-sm sm:text-base">
          <p>
            <FontAwesomeIcon icon={faLocationDot} /> Medan, Indonesia
          </p>
          <p>
            <FontAwesomeIcon icon={faCalendar} /> 16 y.o
          </p>
          <p>
            <FontAwesomeIcon icon={faSchool} className=" w-[0.90rem]" /> High
            School (10th grade)
          </p>
        </div>
      </div>
      <div className="border-2 gap-1 border-black flex flex-col items-start bg-slate-50 rounded-b-2xl p-5 mt-5 font-quicksand font-semibold">
        <button className="text-blue-950 hover:underline" onClick={()=> window.open('https://github.com/fatiryasn')}><FontAwesomeIcon icon={faGithub}/>  Fatiryasn</button>
        <button className=" text-fuchsia-900 hover:underline" onClick={()=> window.open('https://www.instagram.com/ftryas.n')}><FontAwesomeIcon icon={faInstagram} className="h-4"/>  ftryas.n</button>
      </div>
    </div>
  );
};

export default Profile;
