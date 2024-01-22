import React from "react";
import image from '../assets/rectangle2.svg'

const RandomPhrase = ({quote}) => {
    
    console.log(quote)

    const {author, phrase} = quote;

    return(
        <div className="phraseAuthor">
            <div className="imagen">
                <img src={image} alt="" />
                <p>{phrase}</p>
            </div>
            <p className="author">Fuente: {author}</p>
        </div>
    )
}

export default RandomPhrase;