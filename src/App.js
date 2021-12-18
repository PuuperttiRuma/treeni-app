import React from 'react'
import EMOM from './components/EMOM'

const App = () => {
  return (
    < div >
      <EMOM numberOfSets={5} numberOfReps={10} setDuration={5} />
    </div >
  )
}

export default App;
