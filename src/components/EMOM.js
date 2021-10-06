import React, { useState } from 'react'
import Timer from './Timer.js'

/***
 * Esimerkkitapaus:
 * 10x10 Swingiä 10min
 * Tajusinpa juuri, että timerin pitää ilmoittaa, kun se on valmis, jotta osaa ruveta tekemään jotain
 */
const EMOM = ({ numberOfSets, numberOfReps }) => {
    const [currentSet, setCurrentSet] = useState(1)

    const goToNextSet = () => {
        setCurrentSet(currentSet + 1)
    }

    return (
        <div>
            <h2>10x10 Swings</h2>
            <h3>Set {currentSet}/{numberOfSets}</h3>
            <h4>Do {numberOfReps} reps!</h4>
            <h4>                
                <Timer isCountingUp={false} startTime={10} />
            </h4>
            <button onClick={goToNextSet}>Next Set</button>
        </div>
    )
}

export default EMOM