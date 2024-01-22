import { useEffect, useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import RandomPhrase from './components/RandomPhrase';
import randomIndex from './Services/randomIndex';
import ButtonPhrase from './components/ButtonPhrase';
import bgArray from './utils/bgArray.json'
import fondo1 from '../src/assets/fondo1.png'
import fondo2 from '../src/assets/fondo2.png'
import fondo3 from '../src/assets/fondo3.png'
import fondo4 from '../src/assets/fondo4.png'

function App() {
  const sentence = randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);
  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex)

  const bgStyle = [fondo1,fondo2,fondo3,fondo4]

  const x = randomIndex(bgStyle);
    
  return (
    <div className='app'>
      <img src={x} alt="" className='fondoImage'/>
      <div className='container'>
          <h1>GALLETAS DE LA FORTUNA</h1>
          <ButtonPhrase setQuote={setQuote} setBgApp={setBgApp}/>
            <RandomPhrase quote={quote} />
          </div>
        </div>
  )
}

export default App
