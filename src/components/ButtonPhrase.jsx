import React from "react";
import phrases from '../utils/phrases.json'
import randomIndex from "../Services/randomIndex";
import bgArray from "../utils/bgArray.json"

const ButtonPhrase = ({setQuote, setBgApp}) =>{

    const handleButton = () =>{
        const sentence = randomIndex(phrases);
        setQuote(sentence)
        const photos = randomIndex(bgArray);
        setBgApp(photos)
    }

    return(
        <div>
            <button onClick={handleButton}>Probar mi suerte</button>
        </div>
    )
}

export default ButtonPhrase;