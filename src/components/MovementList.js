import React from "react";

const MovementList = ({movements}) => {
  return (
    <div>
      <h3>Workout</h3>
      {movements.map((movement) => (
        <li key={movement.shortName}>
          {movement.sets}x{movement.reps} {movement.fullName} ({movement.weight}
          )
        </li>
      ))}
    </div>
  );
};

export default MovementList