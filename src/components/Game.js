import React, { useState, useEffect } from "react";
import Board, { gridSizeToCardValues, generateCards, shuffleArray } from "./Board";
import { useLocation } from "react-router-dom";

function Game() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gridSize = searchParams.get("grid") || "4x4"; // Default to 4x4 if not specified

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const initializeGame = (gridSize) => {
    const cardValues = gridSizeToCardValues[gridSize];
    const initialCards = generateCards(cardValues);
    const shuffledCards = shuffleArray([...initialCards, ...initialCards]);
    setCards(shuffledCards);
    setGameStarted(true);
  };

  useEffect(() => {
    if (gridSize) {
      initializeGame(gridSize);
    }
  }, [gridSize]);

  const handleCardClick = (clickedCard) => {
    if (!gameStarted || selectedCards.length >= 2 || clickedCard.isFaceUp) {
      return;
    }

    setSelectedCards((prevSelectedCards) => [...prevSelectedCards, clickedCard]);

    const updatedCards = cards.map((card) =>
      card.id === clickedCard.id ? { ...card, isFaceUp: true } : card
    );

    setCards(updatedCards);

    if (selectedCards.length === 1) {
      // Check for a match when the second card is clicked
      if (selectedCards[0].value === clickedCard.value) {
        setMatchedPairs(matchedPairs + 1);
        setSelectedCards([]);
        // Update the card state to stay uncovered
        const updatedCards = cards.map((card) =>
          card.value === clickedCard.value ? { ...card, isFaceUp: true } : card
        );
        setCards(updatedCards);
      } else {
        // Delay and then flip back the cards if not a match
        setTimeout(() => {
          const updatedCards = cards.map((card) => ({
            ...card,
            isFaceUp: false,
          }));
          setSelectedCards([]);
          setCards(updatedCards);
        }, 1000);
      }
    }
  };

  return (
    <div className="container mt-4">
      {gameStarted ? (
        <div>
          <h1 className="text-center">MEMOTICONS</h1>
          <h2 className="text-center">The Emoticon-Matching Game</h2>
          <p className="text-center">Match all pairs to win!</p>
          <div className="row justify-content-center">
            <Board gridSize={gridSize} handleCardClick={handleCardClick} cards={cards} />
          </div>
          {matchedPairs === gridSizeToCardValues[gridSize].length / 2 && (
            <p className="text-center">Congratulations! You won!</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default Game;














