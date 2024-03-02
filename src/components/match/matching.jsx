import React, { useState } from 'react';

// Card component
const Card = ({ name, onSwipeRight, onSwipeLeft }) => {
  const handleSwipeRight = () => {
    onSwipeRight(name);
  };

  const handleSwipeLeft = () => {
    onSwipeLeft(name);
  };

  return (
    <div className="card">
      <h2>{name}</h2>
      <button onClick={handleSwipeRight}>Swipe Right</button>
      <button onClick={handleSwipeLeft}>Swipe Left</button>
    </div>
  );
};

// DatingApp component
const Match = () => {
  const [cards, setCards] = useState([]);
  const [matches, setMatches] = useState([]);

  // Function to add a new card
  const addCard = (name) => {
    setCards([...cards, { name, swipedRight: false }]);
  };

  // Function to handle swipe right
  const handleSwipeRight = (name) => {
    const updatedCards = cards.map((card) =>
      card.name === name ? { ...card, swipedRight: true } : card
    );
    setCards(updatedCards);
    checkMatch(updatedCards);
  };

  // Function to handle swipe left
  const handleSwipeLeft = (name) => {
    // Not handling swipe left in this example
    console.log(`${name} swiped left`);
  };

  // Function to check for matches
  const checkMatch = (updatedCards) => {
    const swipedRightNames = updatedCards.filter((card) => card.swipedRight).map((card) => card.name);
    const newMatches = [];
    for (let i = 0; i < swipedRightNames.length - 1; i++) {
      for (let j = i + 1; j < swipedRightNames.length; j++) {
        newMatches.push(`${swipedRightNames[i]} and ${swipedRightNames[j]}`);
      }
    }
    setMatches(newMatches);
  };

  return (
    <div>
      <h1>Dating App</h1>
      <button onClick={() => addCard('Alice')}>Add Alice</button>
      <button onClick={() => addCard('Bob')}>Add Bob</button>
      <button onClick={() => addCard('Charlie')}>Add Charlie</button>
      <button onClick={() => addCard('David')}>Add David</button>
      <button onClick={() => addCard('Eve')}>Add Eve</button>
      <div className="cards">
        {cards.map((card, index) => (
          <Card key={index} name={card.name} onSwipeRight={handleSwipeRight} onSwipeLeft={handleSwipeLeft} />
        ))}
      </div>
      <h2>Matches</h2>
      <ul>
        {matches.map((match, index) => (
          <li key={index}>{match}</li>
        ))}
      </ul>
    </div>
  );
};

export default Match;
