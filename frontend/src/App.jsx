import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
//local file
import "./global.css";
import FirstLook from "./pages/FirstLook";
import Port from "./pages/Port";

function App() {
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
      <Routes>
        <Route path="/" element={<FirstLook />} />
        <Route path="/main" element={<Port />} />
      </Routes>
      <p className="mt-48 text-sm font-mooli p-5 text-gray-500 w-screen flex justify-center">
        Fatir | All rights reserved
      </p>
    </>
  );
}

export default App;
