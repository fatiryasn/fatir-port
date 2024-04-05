import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const Head = () => {
  const localName = localStorage.getItem('name')
  const [text] = useTypewriter({
    words: [
      `Hello ${localName}!`,
      "Always have been",
      "404 err not found",
      "You are my sunshine"
    ],
    loop: true,
    delaySpeed: 3000,
    typeSpeed: 70,
    deleteSpeed: 50,
  });
  return (
    <div className="flex flex-col md:flex-row w-full items-center justify-center md:justify-between md:px-32 py-5">
      <h1 className="text-3xl font-madimiOne font-bold">
        Fatir
        <span className="text-xs italic font-normal font-raleway text-gray-700">
          PORTOFOLIO
        </span>
      </h1>
      <div className=" bg-slate-300 w-screen h-5 md:h-fit md:w-fit md:bg-transparent flex justify-center text-center mt-3 md:mt-0">
        <p className="font-mooli text-sm md:text-base">{text}</p>
      </div>
    </div>
  );
};

export default Head;
