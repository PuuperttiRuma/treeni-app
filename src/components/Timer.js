import React, { useState, useEffect } from "react";

const Timer = ({ isCountingUp, startTime }) => {
  const [time, setTime] = useState(startTime);
  const [isActive, setIsActive] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (time > 0) {
      setMinutes(Math.floor(time / 60));
      setSeconds(time % 60);
    }
  }, [time]);

  //Kellon siirtäminen
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
