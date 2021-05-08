import React, { useState, useEffect } from "react";

const Timer = () => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(58);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds < 59){
          setSeconds((seconds) => seconds + 1);
        } else {
          setSeconds(0)
          setMinutes((minutes) => minutes + 1);
        }        
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>{minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Timer;
