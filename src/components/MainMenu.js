import React from 'react'

const MainMenu = () => {
  return (
    <div>
      <h1>Vaatimukset</h1>
      <ul>      
        <li>Treeni-appissa on mahdollista luoda oma treeniohjelma</li>
        <li>Treeniohjelma koostuu Treeneistä, joiden aikana suoritetaan Liikkeitä</li>
        <li>Käyttäjä itse valitsee liikkeet jotka kuuluu jokaiseen Treeniin</li>
      </ul>
      <h2>Use case: Tee treeni</h2>
      <p>
      Käyttäjä haluaa tehdä treenin. Hän painaa "tee treeni" nappulaa.
      Appi näyttää, mikä on ensimmäinen tehtävä liike, montako niitä
      tehdään tai kauanko. Sen alla on iso vihreä "Start" nappula.
      </p>
      <h3>Tasaisilla palautuksilla tehtävä liike</h3>
      <p>
      Kun start nappulaa painetaan kello alkaa pyöriä ja "Start"-nappi
      muuttuu "Done!" nappulaksi. Käyttäjä tekee liikkeen ja kun liike
      on tehty, käyttäjä painaa "Done!" nappia.
        Tämän jälkeen lähtee käyntiin palautumislaskuri. Kun palautumis-
      laskuri on päässyt nollaan (laskee alaspäin), kuuluu merkkiääni,
      jonka jälkeen käyttäjä joko painaa "Start" nappulaa, tai seuraava
      liike tulee automaattisesti suoritettavaksi. Käyttäjä voi itse
      päättää, mutta defaulttina automaattisesti.
      </p>
    </div>
  )
}

export default MainMenu