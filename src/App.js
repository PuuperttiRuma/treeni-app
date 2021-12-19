import React from 'react'
import EMOM from './components/EMOM'

const App = () => {
  return (
    < div >
      <EMOM numberOfSets={2} numberOfReps={10} setDuration={3} />
    </div >
  )
}

export default App;
