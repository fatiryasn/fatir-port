import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const FirstLook = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [nameLen, setNameLen] = useState(0);
  const [errMessage, setErrMessage] = useState("");

  const navigate = useNavigate();
  const localName = localStorage.getItem("name");
  if (localName) {
    useEffect(() => {
      return navigate("/main");
    }, []);
  }

  const handleName = (e) => {
    setName(e.target.value);
    setNameLen(e.target.value.length);
  };

  const handleRegister = () => {
    setLoading(true);
    axios
      .post("https://fatir-port-api.vercel.app/user", { name })
      .then(() => {
        console.log("user: success");
        localStorage.setItem("name", name);
        setLoading(false);
        navigate("/main");
      })
      .catch((err) => {
        setErrMessage(err.response.data.message);
        console.error(err);
        setLoading(false)
      });
  };

  return (
    <>
      <Helmet>
        <title>your name pls.. | Fatir</title>
      </Helmet>
      <div className=" h-[90vh] md:h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-[2.5rem] md:text-[3rem] font-raleway font-bold">
          Insert your name
        </h1>
        <label
          htmlFor="name"
          className="mt-5 md:mt-10 text-gray-900 font-quicksand"
        >
          Name <span className="text-xs">(this name can't be changed)</span>
        </label>
        <div className="flex justify-between items-center mt-2 border-b border-black px-2 py-1 rounded-lg">
          <input
            type="text"
            id="name"
            maxLength="12"
            autoComplete="off"
            value={name}
            autoFocus
            onChange={handleName}
            className="w-64 md:w-72 text-lg bg-transparent outline-none"
          ></input>
          <span className="text-sm text-gray-700 w-12 px-2">{nameLen}/12</span>
        </div>

        <p className="text-sm text-red-600 font-semibold font-quicksand mt-2 h-4">
          {errMessage}
        </p>
        <button
          className={`font-poppins mt-10 rounded-full bg-gray-950 border-4 border-cyan-700 drop-shadow-[0px_0px_10px_#2aeef5] text-white font-bold p-7  ${
            nameLen <= 0
              ? "translate-y-64 opacity-0 duration-500"
              : "translate-y-0 opacity-100 duration-500"
          }`}
          disabled={nameLen <= 0}
          onClick={handleRegister}
        >
          {loading ? "wait..." : "GO"}
        </button>
      </div>
    </>
  );
};

export default FirstLook;
