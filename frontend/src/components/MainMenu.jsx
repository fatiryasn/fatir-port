import React, { useState, useEffect } from "react";
import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";

import "../global.css";

const MainMenu = ({ title, bgcolor }) => {

  useEffect(() => {
    const container = document.getElementById("main-menu-container");
    container.classList.remove("reveal-text");
    void container.offsetWidth;
    container.classList.add("reveal-text");
  }, [title]);

  let content;
  let color;
  if (title === "PROJECTS") {
    content = <Projects />;
    color = "bg-fuchsia-950";
  } else if (title === "SKILLS") {
    content = <Skill />;
    color = "bg-cyan-950";
  } else if (title === "ABOUT") {
    content = <About />
    color = "bg-lime-950"
  }

  return (
    <div
      id="main-menu-container"
      className="flex justify-center rounded-3xl border-2 border-black h-[80vh] md:h-[70vh] p-3 reveal-text duration-500 mt-5 md:w-8/12"
    >
      <div
        className={`flex flex-col lg:text-xl ${color} font-bold text-white justify-center rounded-l-3xl px-8 lg:px-14 text-center gap-3 font-raleway`}
      >
        {title.split("").map((letter, index) => (
          <span key={index} className="vertical-letter">
            {letter}
          </span>
        ))}
      </div>
      <div className="grid lg:grid-cols-2 bg-slate-50 rounded-r-3xl gap-8 md:gap-10 p-5  overflow-y-auto">
        {content}
      </div>
    </div>
  );
};

export default MainMenu;
