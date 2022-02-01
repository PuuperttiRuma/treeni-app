import React from "react";

const ExerciseList = ({exercises}) => {
  return (
    <div>
      <h3>Workout</h3>
      {exercises.map((exercise) => (
        <li key={exercise.shortName}>
          {exercise.sets}x{exercise.reps} {exercise.fullName} ({exercise.weight}
          )
        </li>
      ))}
    </div>
  );
};

export default ExerciseList