import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
//local file
import "../global.css";
import Head from "../components/Head";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import MainMenu from "../components/MainMenu";
import Datas from "../components/Datas";
import Comment from "../components/Comment";

const Port = () => {
  const [isMd, setIsMd] = useState(false);
  const [menu, setMenu] = useState("ABOUT");

  useEffect(() => {
    function handleResize() {
      setIsMd(window.innerWidth >= 768);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavbar = (info) => {
    setMenu(info);
  };

  return (
    <>
      <Helmet>
        <title>Main page | Fatir</title>
      </Helmet>
      <Head />

      {isMd ? (
        <div className="flex flex-col items-center justify-center mt-5 px-10 lg:px-32 mb-0">
          <Navbar onPress={handleNavbar} />
          <div className="flex justify-between w-screen px-10 gap-2 xl:px-48">
            <Profile />
            <MainMenu title={menu} />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-5 mb-40">
          <Profile />
          <div className="flex flex-col justify-between items-center px-3 w-screen">
            <Navbar onPress={handleNavbar} />
            <MainMenu title={menu} />
          </div>
        </div>
      )}
      <Datas />
      <Comment />
    </>
  );
};

export default Port;
