import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icareli from "./assets/IcareliUNS.svg";

const Navbar = () => {
  const [buttonColor, setButtonColor] = useState("#FFFFFF");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <nav className="flex items-center justify-between p-5 background-transparent">
      <Link to="/home">
        <img src={Icareli} alt="Logo" className="h-8 w-auto sm:h-10 cursor-pointer" />
      </Link>
      <div className="flex items-center font-bold text-black font-plus-jakarta space-x-4">
        {["About", "Program", "Speakers", "Commitee", "News", "Contact"].map((item, index) => (
          <Link to={`/${item.toLowerCase()}`} className="" key={index} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} style={{ color: hoveredIndex === index ? "#00FF94" : "#000000" }}>
            {item}
          </Link>
        ))}
        <Link to="/register">
          <button className="text-black px-8 py-2 rounded border border-black" style={{ backgroundColor: buttonColor }} onMouseEnter={() => setButtonColor("#00FF94")} onMouseLeave={() => setButtonColor("#FFFFFF")}>
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
