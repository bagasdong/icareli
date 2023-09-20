import React from "react";
import Countdown from "react-countdown";

const Home = () => {
  const targetDate = new Date("August 16, 2023 09:11:00");
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Conference has started!</span>;
    } else {
      return (
        <div className="flex justify-center space-x-4">
          <div className="p-3 border-2 border-gray-500 text-center">
            <span>{days} days</span>
          </div>
          <div className="p-3 border-2 border-gray-500 text-center">
            <span>{hours} hours</span>
          </div>
          <div className="p-3 border-2 border-gray-500 text-center">
            <span>{minutes} minutes</span>
          </div>
          <div className="p-3 border-2 border-gray-500 text-center">
            <span>{seconds} seconds</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-1/2 p-5 text-center bg-yellow-100 font-plus-jakarta" style={{ backgroundColor: "#00FF94" }}>
      <div className="w-1/2 flex flex-col items-center justify-center p-5 text-center">
        <h1 className="text-4xl font-bold mb-4 p-5 font-plus-jakarta">Conference start in:</h1>
        <Countdown date={targetDate} renderer={renderer} />
      </div>
    </div>
  );
};

export default Home;
