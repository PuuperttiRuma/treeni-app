import React, { useState, useEffect } from "react";

const Timer = ({ time, isActive, onTimerTick }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  //Formatting the time to minutes and seconds
  useEffect(() => {
    setMinutes(Math.floor(Math.abs(time) / 60));
    setSeconds(Math.abs(time) % 60);
  }, [time]);

  //Updating the time
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
          onTimerTick();
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, onTimerTick]);

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
    </div>
  );
};

export default Timer;
