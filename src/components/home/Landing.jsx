import React, { useContext } from "react";
import backgroundImage from "../assets/background.svg";
import { MainContext } from "../../context/MainContext";

const Home = () => {
  const { year } = useContext(MainContext);
  return (
    <div
      className="flex flex-col items-center justify-center h-screen p-5 text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-3/4 flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-6xl font-bold mb-4 p-5 font-plus-jakarta">
          The 2nd International Conference on Animal Research for Eco-Friendly
          Livestock Industry
        </h1>
        <h1 className="text-2xl font-bold mb-4 p-5 font-plus-jakarta">
          Presented by The Faculty of Animal Science, Universitas Sebelas Maret,
          Surakarta, Indonesia Hybrid meeting,
        </h1>
        <p className="text-2xl font-plus-jakarta">August 15th - 16th, {year}</p>
      </div>
    </div>
  );
};

export default Home;
