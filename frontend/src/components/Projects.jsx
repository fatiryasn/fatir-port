import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "../global.css";

const Projects = () => {
  return (
    <>
      <div className="bg-gray-800 p-3 h-fit rounded-2xl shadow-2xl">
        <div className="bg-slate-50 rounded-lg p-2">
          <h2 className="text-xl md:text-2xl text-green-700 font-poppins font-bold">
            Contactsaver
          </h2>
          <p className="text-gray-900 font-quicksand text-sm ">
            Contactsaver is a CRUD website to save your contact, with good UI
            and data visualization
          </p>
        </div>
        <div className="flex justify-start items-start gap-5 mt-4">
          <button
            className="bg-slate-50 px-3 text-sm py-1 rounded-xl font-mooli font-semibold hover:bg-slate-300"
            onClick={() =>
              window.open("https://github.com/fatiryasn/mern-stack-crud")
            }
          >
            <FontAwesomeIcon icon={faGithub} /> Github
          </button>
          <button
            className="bg-slate-50 px-3 text-sm py-1 rounded-xl font-mooli font-semibold hover:bg-slate-300"
            onClick={() => window.open("https://contactsaver.vercel.app/")}
          >
            <FontAwesomeIcon icon={faLink} /> Website
          </button>
        </div>
      </div>
      <div className="p-5">Coomin soon</div>
      <div className="p-5">Coomin soon</div>
      <div className="p-5">Coomin soon</div>
    </>
  );
};

export default Projects;
