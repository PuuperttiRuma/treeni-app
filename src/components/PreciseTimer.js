import React, { useState, useEffect } from "react";
import { useStopwatch } from "react-use-precision-timer";

const PreciseTimer = () => {
  const [renderTime, setRenderTime] = useState(new Date().getTime());
  const stopwatch = useStopwatch()

  useEffect(() => {
    const timeout = setTimeout(() => setRenderTime(new Date().getTime()), 100);
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      Precise Timer
      <p>{stopwatch.getElapsedRunningTime()}</p>
      <button onClick={stopwatch.start}>Start</button>
      <button onClick={stopwatch.pause}>Pause</button>
      <button onClick={stopwatch.resume}>Resume</button>

    </>
  );
};

export default PreciseTimer;
