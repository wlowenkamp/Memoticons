import React, { useState, useEffect } from "react";
import Board, { gridSizeToCardValues, generateCards, shuffleArray } from "./Board";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Game() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const gridSize = searchParams.get("grid") || "4x4";

  const [cards, setCards] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

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
    if (!gameStarted || clickedCard.isFaceUp || selectedCard === clickedCard) {
      return;
    }

    if (selectedCard) {
      if (selectedCard.value === clickedCard.value) {
        toast.success("Match found!", {
          position: "top-right",
          autoClose: 1500,
        });
      } else {
        toast.warning("Not a match! Try again!", {
          position: "top-right",
          autoClose: 1500,
        });
        setTimeout(() => {
          selectedCard.isFaceUp = false;
          clickedCard.isFaceUp = false;
          setCards([...cards]);
        }, 1000);
      }
      setSelectedCard(null);
    } else {
      clickedCard.isFaceUp = true;
      setCards([...cards]);
      setSelectedCard(clickedCard);
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
        </div>
      ) : null}
      <ToastContainer />
    </div>
  );
}

export default Game;


































