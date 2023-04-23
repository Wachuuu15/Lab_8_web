import React, { useState } from "react";
import "index.css";

const cardImage =[
    {"src": "img/1.jpg"},
    {"src": "img/2.jpg"},
    {"src": "img/3.jpg"},
    {"src": "img/4.jpg"},
    {"src": "img/5.jpg"},
    {"src": "img/6.jpg"},
    {"src": "img/7.jpg"},
    {"src": "img/8.jpg"},
    {"src": "img/9.jpg"},
    {"src": "img/10.jpg"}
]
function Memory (){
    const[cards, setCards] = useState([])
    const[turns, setTurns] = useState(0)

    const shuffleCards = () =>{
        const shuffleCards = [...cardImage, ...cardImage]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random() }))

        setCards(shuffleCards)
        setTurns(0)
    }

        console.log(cards,turns)
    
        return (<div className="wow">
        <h1>TAYLOR SWIFT</h1>
        <h3>Welcome to Taylor Swift's Memory, 'The Eras Tour'</h3>
        <button onClick={shuffleCards}>New Game</button>

        <div className="card-grid">
            {cards.map(card=>(
                <div className="card" key={card.id}>
                    <div>
                        <img className="front" src={card.src} alt="card front" />
                        <img className="back" src="/img/the_eras_tour.jpg" alt="card back"/>
                    </div>
                </div>
            ))}
        </div>

    </div>
    )
};

export default Memory;