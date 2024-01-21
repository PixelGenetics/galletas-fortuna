import { useEffect, useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'

function App() {
  const [frase, setFrase] = useState("")

  function randomInt(num) {
    return Math.floor(Math.random() * num);
  }

  useEffect(() => {
    obtenerFraseAleatoria();
  },[]);

  function obtenerFraseAleatoria() {
    const jsonSize = phrases.length;
    const jsonSize2 = randomInt(jsonSize);
    const fraseAleatoria = phrases[jsonSize2];

    setFrase(fraseAleatoria);
    console.log('frase',frase)
  }
  return (
    <div className='app'>
      <div className='container'>
          <h1>GALLETAS DE LA FORTUNA</h1>
          <button onClick={obtenerFraseAleatoria}>Ver otro</button>
          <div className='phraseAuthor'>
            <p >{frase.phrase}</p>
            <p >Fuente: {frase.author}</p>
          </div>
        </div>
    </div>
  )
}

export default App
