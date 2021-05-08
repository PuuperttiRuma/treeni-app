import React, { useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  if (isActive) setTimeout( () => setSeconds(seconds + 1), 1000 )

  return (
    <div>
      <button onClick={() => setIsActive(true)}>Start</button>
      {seconds}
    </div>
  );
};

export default Timer;
