import React, { useState } from 'react';
import './AboutPhilosophy.css';
import AboutPhilosophyCard from './AboutPhilosophyCard';
import burger_ingredients from '../../imgs/other_imgs/burger-ingredients1-min.jpg';
import high_quality from '../../imgs/other_imgs/high-quality-min.jpg';
import moment from '../../imgs/other_imgs/every-moment-min.jpg';
import uuid from 'uuid/v4';

export default function AboutPhilosophy(){
    const [cardData, setCardData] = useState([
        { id: 'ingredients', caption: 'Best Burger INGREDIENTS 🍔', img: burger_ingredients, isFlipped: false, key: uuid() },
        { id: 'quality', caption: 'Providing High Quality CHEFS 👨‍🍳', img: high_quality, isFlipped: false, key: uuid() },
        { id: 'moment', caption: 'Enjoying Every MOMENT 🥳', img: moment, isFlipped: false, key: uuid() }
    ])

    function cardFlip(idx, bool){
        let tempCardData = cardData.map((card, i) => {
            if(idx === i){
                return { ...card, isFlipped: bool };
            } else {
                return { ...card, isFlipped: false };
            }
        })
        setCardData(tempCardData)
    }

    return(
        <div className="AboutPhilosophy">
            <div className="AboutPhilosophyCards">
                {cardData.map((card, i) => (
                    <AboutPhilosophyCard 
                        cardFlipCB={cardFlip} 
                        {...card} 
                        idx={i} 
                    />
                ))}
            </div>
        </div>
    )
}