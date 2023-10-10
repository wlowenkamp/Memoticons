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

  const numRows = gridSize === "4x4" ? 2 : 3; // Adjust the number of rows based on gridSize
  const numCols = gridSize === "4x4" ? 2 : 4; // Adjust the number of columns based on gridSize

  return (
    <div className="container-fluid mt-4">
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





