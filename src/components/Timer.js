import React, { useState, useEffect } from "react";

const Timer = ({ isCountingUp, startTime, onReachZero }) => {
  const [time, setTime] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setTime(startTime);
    setIsActive(false);
  };

  //Formatting the time to minutes and seconds
  useEffect(() => {
    setMinutes(Math.floor(Math.abs(time) / 60));
    setSeconds(Math.abs(time) % 60);
  }, [time]);

  //Timer is zero
  useEffect(() => {
    if (time === 0) {
      console.log("Timer: Timer zero!");
      onReachZero();
    }
  }, [time, onReachZero]);

  //Updating the time
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        isCountingUp
          ? setTime((seconds) => seconds + 1)
          : setTime((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isCountingUp]);

  return (
    <div>
      <div>
        {time < 0 ? "-" : ""}
        {minutes}:
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Timer;
