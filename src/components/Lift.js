import React from "react";
import { useState } from "react/cjs/react.development";

/**
 * Lift is an movement, that consists of a period
 * of work followed by a fixed rest period.
 * @param {} props 
 */
const Lift = ({movement}) => {
  const [setCount, setSetCount] = useState(1)

  return (
    <div>
      <h2>{movement.fullName}</h2>
      <h3>Set {setCount}/{parseInt(movement.sets)}</h3>
      <h1>Do {movement.reps} reps</h1>
      <p>00:00</p>
      <button>Set Done</button>
    </div>
  );
};

export default Lift;
