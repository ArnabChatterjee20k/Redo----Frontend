import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';
import './swap.css'

const data = [
  { name: 'Card 1', imgUrl: 'https://placeimg.com/400/400/animals' },
  { name: 'Card 2', imgUrl: 'https://placeimg.com/400/400/nature' },
  { name: 'Card 3', imgUrl: 'https://placeimg.com/400/400/people' },
  { name: 'Card 4', imgUrl: 'https://placeimg.com/400/400/architecture' },
];

// Array of soft colors
const softColors = ['#FFD2D2', '#FFE5D9', '#FFF9C4', '#DCF1FF', '#E3D4FF'];

const CardSwiper = () => {
  const [cards, setCards] = useState(data);

  const swiped = (direction, nameToDelete) => {
    console.log(`Removed ${nameToDelete} to the ${direction}`);
    // Handle swipes here
  };

  const outOfFrame = (name) => {
    console.log(name + ' left the screen');
  };

  return (
    <div className="card-container">
      {cards.map((card, index) => (
        <TinderCard
          className="swipe"
          key={card.name}
          preventSwipe={['up', 'down']}
          onSwipe={(dir) => swiped(dir, card.name)}
          onCardLeftScreen={() => outOfFrame(card.name)}
        >
          <div
            style={{
              backgroundImage: `url(${card.imgUrl})`,
              backgroundColor: softColors[index % softColors.length], // Assigning soft colors dynamically
            }}
            className="card"
          >
            <h3>{card.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
};

export default CardSwiper;
