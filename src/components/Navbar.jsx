import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icareli from "./assets/IcareliUNS.svg";
import { API_BASE_URL } from "../config";
import { MainContext } from "../context/MainContext";

const Navbar = () => {
  const [buttonColor, setButtonColor] = useState("#FFFFFF");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [events, setEvents] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const { setEvent } = useContext(MainContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API_BASE_URL}event`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((err) => console.error("Error : ", err));
  }, []);

  return (
    <nav className="flex items-center justify-between p-5 background-transparent">
      <Link to="/home">
        <img
          src={Icareli}
          alt="Logo"
          className="h-8 w-auto sm:h-10 cursor-pointer"
        />
      </Link>
      <div className="flex items-center font-bold text-black font-plus-jakarta space-x-4">
        {["About", "Program", "Speakers", "Commitee", "News", "Contact"].map(
          (item, index) => (
            <Link
              to={`/${item.toLowerCase()}`}
              className=""
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ color: hoveredIndex === index ? "#00FF94" : "#000000" }}
            >
              {item}
            </Link>
          )
        )}

        <div className="relative">
          <button onClick={() => setDropdownVisible(!dropdownVisible)}>
            Previous Conference
          </button>
          {dropdownVisible && (
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white">
              <div className="rounded-md shadow-xs py-1">
                {events.map((event) => (
                  <button
                    onClick={() => {
                      setDropdownVisible(!dropdownVisible);
                      setEvent(parseInt(event.id));
                      navigate("/home");
                    }}
                    key={event.id}
                    className="btn p-2 px-4 m-1 rounded-full text-lg "
                  >
                    {event.nama_acara}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <Link to="/register">
          <button
            className="text-black px-8 py-2 rounded border border-black"
            style={{ backgroundColor: buttonColor }}
            onMouseEnter={() => setButtonColor("#00FF94")}
            onMouseLeave={() => setButtonColor("#FFFFFF")}
          >
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
