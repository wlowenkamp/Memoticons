import React, { useEffect, useState } from "react";
import Card from "./Card";

export const gridSizeToCardValues = {
  "4x4": ["😀", "🚀", "🌟", "🎉", "🍔", "🌈", "🌻", "🦄"],
  "8x4": [
    "😀", "🚀", "🌟", "🎉", "🍔", "🌈", "🌻", "🦄",
    "🐱", "🐶", "🐻", "🦊", "🐵", "🦁", "🐼", "🦋"
  ],
  "8x6": [
    "😀", "🚀", "🌟", "🎉", "🍔", "🌈", "🌻", "🦄",
    "🐱", "🐶", "🐻", "🦊", "🐵", "🦁", "🐼", "🦋",
    "🐮", "🐷", "🦉", "🐧", "🐨", "🦕", "🦢", "🐙"
  ]
};

export function generateCards(values) {
  return values.map((value, index) => ({
    id: index,
    value,
    isFaceUp: false,
  }));
}

export function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

function Board({ gridSize, handleCardClick, cards }) {
  const cardValues = gridSizeToCardValues[gridSize];

  const numRows = gridSize === "4x4" ? 4 : gridSize === "8x4" ? 4 : 6;
  const numCols = gridSize === "4x4" ? 4 : gridSize === "8x4" ? 8 : 8;

  return (
    <div className="container mt-4">
      <div className="row">
        {cards.map((card) => (
          <div key={card.id} className={`col-${12 / numCols} mb-4`}>
            <Card card={card} onClick={() => handleCardClick(card)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;







