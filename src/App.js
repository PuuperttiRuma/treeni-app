import React, { useState } from 'react'
import MainMenu from './components/MainMenu.js'


const App = () => {
  const [timer, setTimer] = useState(0)
  const [play, setPlay] = useState(false)

  if (play) setTimeout( () => setTimer(timer + 1), 10 )

  return (
    < div >
      <p>KYYKKY</p>
      <p>50kg</p>
      <p>5 toistoa</p>

      <button onClick={() => setPlay(true) }>Start</button>
      {timer}

      <MainMenu />
    </div >
  )
}

export default App;
