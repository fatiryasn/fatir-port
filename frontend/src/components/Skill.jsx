import React, { useState } from "react";

//local file
import "../global.css";
import express from "../assets/express.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import vite from "../assets/vite.png";
import tailwind from "../assets/tailwind.png";
import node from "../assets/node.png";

const Skill = () => {
  return (
    <>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5">
        <div className="flex items-center">
          <img src={react} alt="react" className="h-12" />
          <h2 className="font-quicksand text-cyan-500 font-semibold">
            React.js
          </h2>
        </div>
        <div className=" xl:w-96 pl-7">
          <span className="text-xs font-raleway italic">FRONTEND </span>
          <ul className=" list-disc font-quicksand">
            <li>JSX</li>
            <li>Component-based style</li>
            <li>Hooks</li>
            <li>Routing</li>
            <li>API Integration (axios)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5 ">
        <div className="flex items-center">
          <img src={tailwind} alt="tailwind" className="h-12" />
          <h2 className="font-quicksand text-blue-400 font-semibold">
            Tailwind.css
          </h2>
        </div>
        <div className=" pl-7">
          <span className="text-xs font-raleway italic">FRONTEND </span>
          <ul className=" list-disc font-quicksand">
            <li>Responsive Design</li>
            <li>Layouting</li>
            <li>Component-based style</li>
            <li>Typography</li>
            <li>Animation</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5 ">
        <div className="flex items-center">
          <img src={vite} alt="vite" className="h-12" />
          <h2 className="font-quicksand text-purple-600 font-semibold">Vite</h2>
        </div>
        <div className="pl-7">
          <span className="text-xs font-raleway italic">FRONTEND </span>
          <ul className=" list-disc font-quicksand">
            <li>Project Setup</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5">
        <div className="flex items-center gap-1">
          <img src={express} alt="" className="h-12 p-1" />
          <h2 className="font-quicksand text-yellow-500 font-semibold">
            Express.js
          </h2>
        </div>
        <div className=" pl-7">
          <span className="text-xs font-raleway italic">BACKEND </span>
          <ul className=" list-disc font-quicksand">
            <li>HTTP Protocols</li>
            <li>Routing</li>
            <li>Middleware</li>
            <li>Auth (JWT)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5">
        <div className="flex items-center">
          <img src={node} alt="node" className="h-12" />
          <h2 className="font-quicksand text-lime-600 font-semibold">
            Node.js
          </h2>
        </div>
        <div className=" pl-7">
          <span className="text-xs font-raleway italic">BACKEND </span>
          <ul className=" list-disc font-quicksand">
            <li>NPM (Node Package Manager)</li>
          </ul>
        </div>
      </div>
      <div className="bg-white border border-black shadow-2xl rounded-2xl p-5">
        <div className="flex items-center">
          <img src={mongo} alt="mongo" className="h-12" />
          <h2 className="font-quicksand text-green-600 font-semibold">
            MongoDB
          </h2>
        </div>
        <div className=" pl-7">
          <span className="text-xs font-raleway italic">BACKEND </span>
          <ul className=" list-disc font-quicksand">
            <li>MongoDB Atlas</li>
            <li>CRUD</li>
            <li>Indexing</li>
            <li>Querying</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skill;
