import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds > 0){
          setSeconds((seconds) => seconds - 1);
        } else if (minutes > 0) {
          setSeconds(59)
          setMinutes((minutes) => minutes - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, minutes]);

  return (
    <div>
      <div>{minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})}</div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
};

export default CountdownTimer;
