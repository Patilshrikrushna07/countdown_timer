"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
const [showValue,setShowValue]=useState(false);

console.log(showValue);
  useEffect(() => {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;
    let remainingSeconds = totalSeconds;

    const interval = setInterval(() => {
      if (remainingSeconds <= 0) {
        clearInterval(interval);
      } else {
        remainingSeconds--;

        const updatedHours = Math.floor(remainingSeconds / 3600);
        const updatedMinutes = Math.floor((remainingSeconds % 3600) / 60);
        const updatedSeconds = remainingSeconds % 60;

        setHours(updatedHours);
        setMinutes(updatedMinutes);
        setSeconds(updatedSeconds);

        if (remainingSeconds <= 0) {
          clearInterval(interval);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [hours, minutes, seconds]);

  const handleHoursChange = (e) => {
    setHours(Math.max(0, parseInt(e.target.value, 10) || "00"));
  };

  const handleMinutesChange = (e) => {
    setMinutes(Math.max(0, parseInt(e.target.value, 10) || "00"));
  };

  const handleSecondsChange = (e) => {
    setSeconds(Math.max(0, parseInt(e.target.value, 10) || "00"));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      {
      showValue && (
        <div className="flex items-center md:justify-center md:h-screen cursor-pointer gap-7 p-5">
        <div className="">
          <input
            className="rounded-2xl p-3 outline-none bg-black text-red-700 text-5xl w-20 border  text-center"
            type=""
            value={hours}
            onChange={handleHoursChange}
          />
        </div>
        <span className="text-white text-7xl flex justify-center items-center">:</span>
        <div>
          <input
            className="rounded-2xl p-3 outline-none bg-black text-red-700 w-20  text-5xl border text-center"
            type="text"
            value={minutes}
            onChange={handleMinutesChange}
          />
        </div>
        <span className="text-white text-7xl flex text-center">:</span>
        <div>
          <input
            className="rounded-2xl p-3 outline-none bg-black text-red-700 w-20 text-5xl border  text-center" 
            type="text"
            value={seconds}
            onChange={handleSecondsChange}
          />
        </div>
      </div>
      
      )
      }
      <div className="flex items-center md:justify-center md:h-screen cursor-pointer" onClick={()=>(showValue ? setShowValue(false) :setShowValue(true))}>
        <div className="font-bold">
          <p className="md:text-9xl text-3xl text-red-600">
            {hours ? hours : "00"} : {minutes ? minutes : "00"} :{" "}
            {seconds ? seconds : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
