import React, { useState, useEffect } from "react";

const Timer = ({isCountingUp, startTime}) => {
  console.log(isCountingUp, startTime)
  const [seconds, setSeconds] = useState(startTime);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        isCountingUp
          ? setSeconds(seconds => seconds + 1)
          : setSeconds(seconds => seconds - 1)
      }
      , 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds, isCountingUp]);

  return (
    <div>
      {/* {minutes}:{seconds.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false})} */}
      <div>{seconds}</div>
      <button onClick={toggle}>{isActive ? "Pause" : "Start"}</button>
    </div>
  );
};

export default Timer;
