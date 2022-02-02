import React, { useState } from "react";
import MovementList from "./MovementList";
import Lift from "./Lift";
import movements from "../dummydata/dummyMovements";

const Workout = () => {
  const [workoutStarted, setWorkoutStarted] = useState(false);
  const [currentMovement, setCurrentMovement] = useState('')

  const handleStartWorkout = () => {
    setWorkoutStarted(true);
    setCurrentMovement(movements[0])
  };

  if (!workoutStarted) {
    return (
      <div>
        <MovementList movements={movements} />
        <button onClick={handleStartWorkout}>Start Workout</button>
      </div>
    );
  }
  if (workoutStarted) {
    return (
      <div>
        <Lift movement={currentMovement}/>
      </div>
    );
  }
};

export default Workout;
