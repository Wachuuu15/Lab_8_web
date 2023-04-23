import React, { useEffect, useState } from "react";
import "index.css";
import SingleCard from "./components/singlecard";


import img1 from "img/1.jpg";
import img2 from "img/2.jpg";
import img3 from "img/3.jpg";
import img4 from "img/4.jpg";
import img5 from "img/5.jpg";
import img6 from "img/6.jpg";
import img7 from "img/7.jpg";
import img8 from "img/8.jpg";
import img9 from "img/9.jpg";
import img10 from "img/10.jpg";

const cardImage = [
  { "src": img1 , matched: false},
  { "src": img2 , matched: false},
  { "src": img3 , matched: false},
  { "src": img4 , matched: false},
  { "src": img5 , matched: false},
  { "src": img6 , matched: false},
  { "src": img7 , matched: false},
  { "src": img8 , matched: false},
  { "src": img9 , matched: false},
  { "src": img10 , matched: false},
];

function Memory() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setchoiceOne] = useState(null);
  const [choiceTwo, setchoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffleCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffleCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) =>{
    choiceOne ? setchoiceTwo(card): setchoiceOne(card)
  }

  //compare
  useEffect(() =>{
    if(choiceOne && choiceTwo){
        if(choiceOne.src === choiceTwo.src) {
            setCards(prevCards => {
                return prevCards.map(card =>{
                  if (card.src === choiceOne.src) {
                    return {...card, matched: true}
                  }else{
                    return card
                  }  
                })
            })
            resetTurn()
        } else{
            setTimeout(() =>resetTurn(), 1000)
        }
    }

  },[choiceOne,choiceTwo])

  //reset
  const resetTurn = () =>{
    setchoiceOne(null)
    setchoiceTwo(null)
    setTurns(prevTurns => prevTurns+1)
  }

  return (
    <div className="wow">
      <h1>TAYLOR SWIFT</h1>
      <h3>Welcome to Taylor Swift's Memory, 'The Eras Tour'</h3>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice = {handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default Memory;