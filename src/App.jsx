import { useEffect, useState } from 'react'
import './App.css'
import phrases from './utils/phrases.json'
import RandomPhrase from './components/RandomPhrase';
import randomIndex from './Services/randomIndex';
import ButtonPhrase from './components/ButtonPhrase';
import bgArray from './utils/bgArray.json'

function App() {
  const sentence = randomIndex(phrases);
  const bgIndex = randomIndex(bgArray);
  const [quote, setQuote] = useState(sentence);
  const [bgApp, setBgApp] = useState(bgIndex)

  const bgStyle = {
    backgroundImage: `url('../src/assets/fondo${bgApp}.png')`
  }

  return (
    <div className='app' style={bgStyle}>
      <div className='container'>
          <h1>GALLETAS DE LA FORTUNA</h1>
          <ButtonPhrase setQuote={setQuote} setBgApp={setBgApp}/>
            <RandomPhrase quote={quote} />
          </div>
        </div>
  )
}

export default App
