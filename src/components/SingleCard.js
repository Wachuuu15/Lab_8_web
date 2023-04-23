import React from 'react';
import './SingleCard.css';
import the_eras_tour from "img/the_eras_tour.jpg";

export default function SingleCard({card, handleChoice, flipped}){

    const handleClick = () =>{
        handleChoice(card)
    }

    return(
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
              <img className="front" src={card.src} alt="card front" />
              <img 
              className="back" 
              src={the_eras_tour} 
              onClick={handleClick} 
              alt="card back" 
            />
            </div>
        </div>
    );
}
