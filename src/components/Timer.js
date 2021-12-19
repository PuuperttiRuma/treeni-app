import React, { useState, useEffect } from "react";

const Timer = ({ time, isActive, onTimerTick }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [tenths, setTenths] = useState(0);

  //Formatting the time to minutes and seconds
  useEffect(() => {
    setMinutes(Math.floor(Math.abs(time) / 600));
    setSeconds(Math.floor(Math.abs(time) / 10) % 60);
    setTenths(Math.abs(time) % 10);
  }, [time]);

  //Updating the time
  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
          onTimerTick();
      }, 100);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time, onTimerTick]);

  return (
    <div>
      {time} ds
      <div>        
        {time < 0 ? "-" : ""}
        {minutes}:
        {seconds.toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}.
        {tenths}
      </div>
    </div>
  );
};

export default Timer;
