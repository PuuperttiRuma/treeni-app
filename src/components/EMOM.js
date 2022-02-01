import React, { useState, useEffect } from "react";
import PreciseTimer from "./Timer.js";

/***
 * Esimerkkitapaus:
 * 10x10 Swingiä 10min
 */
const EMOM = ({ numberOfSets, numberOfReps, setDurationSecs }) => {
  const [time, setTime] = useState(setDurationSecs);
  const [currentSet, setCurrentSet] = useState(1);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const goToNextSet = () => {
    setCurrentSet(currentSet + 1);
  };

  const handlePlayButtonPress = () => {
    setIsTimerActive(!isTimerActive);
  };

  //Timer reaches zero
  useEffect(() => {
    if (time === 0) {
      if (currentSet === numberOfSets) {
        console.log("Done!");
      } else {
        setTime(setDurationSecs);
        setCurrentSet(currentSet + 1);
      }
    }
  }, [currentSet, numberOfSets, setDurationSecs, time]);

  const handleTimerTick = () => {
    setTime((time) => time - 1);
  };

  return (
    <div>
      <h2>10x10 Swings</h2>
      <h3>
        Set {currentSet}/{numberOfSets}
      </h3>
      <h4>Do {numberOfReps} reps!</h4>
      <h4>
        <PreciseTimer
          time={time}
          isActive={isTimerActive}
          onTimerTick={handleTimerTick}
        />
      </h4>
      <button onClick={handlePlayButtonPress}>
        {isTimerActive ? "Pause" : "Start"}
      </button>
      <button onClick={goToNextSet}>Next Set</button>
    </div>
  );
};

export default EMOM;
