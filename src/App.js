import React from 'react'
import MainMenu from './components/MainMenu.js'
import Timer from './components/Timer.js'


const App = () => {
  return (
    < div >
      <p>KYYKKY</p>
      <p>50kg</p>
      <p>5 toistoa</p>
      <Timer isCountingUp={true} startTime={0} />
      <Timer isCountingUp={false} startTime={2} />
      <MainMenu />
    </div >
  )
}

export default App;
