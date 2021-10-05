import React from 'react'
import MainMenu from './components/MainMenu.js'
import Timer from './components/Timer.js'
import EMOM from './components/EMOM'

const App = () => {
  return (
    < div >
      <EMOM numberOfSets={5} numberOfReps={10} />
    </div >
  )
}

export default App;
