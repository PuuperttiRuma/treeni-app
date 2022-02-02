import React, { useState } from "react";
import ExerciseList from "./ExerciseList";
import EMOM from "./EMOM";

const exercises = [
  {
    fullName: "Bulgarian Split Squat",
    shortName: "Bulg SS",
    sets: "2",
    reps: "8/8",
    weight: "10kg",
    type: "lift",
    rest: 120,
    avgSetTime: 60,
  },
  {
    fullName: "Pushup",
    shortName: "Pushup",
    sets: "2",
    reps: "8",
    weight: "BW",
    type: "lift",
    rest: 120,
    avgSetTime: 30,
  },
  {
    fullName: "KB 2-handed Swing",
    shortName: "KB 2H Swing ",
    sets: "EMOM 6",
    reps: "6",
    weight: "12kg",
    type: "EMOM",
  },
];

const Workout = () => {
  const [isWorkoutOn, setIsWorkoutOn] = useState(false);

  const handleStartWorkout = () => {
    setIsWorkoutOn(true);
  };

  if (!isWorkoutOn) {
    return (
      <div>
        <ExerciseList exercises={exercises} />
        <button onClick={handleStartWorkout}>Start Workout</button>
      </div>
    );
  }
  if (isWorkoutOn) {
    return (
      <div>
        <EMOM  />
      </div>
    );
  }
};

export default Workout;
