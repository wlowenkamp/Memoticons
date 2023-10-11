import React from "react";
import { toast } from "react-toastify";

function Card({ card, onClick }) {
  const handleCardClick = () => {
    if (!card.isFaceUp) {
      onClick(card);
    }
  };

  const cardStyle = {
    width: "100px",
    height: "100px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    border: "1px solid #ccc",
  };

  return (
    <div
      className={`card ${card.isFaceUp ? "bg-warning" : "bg-light"}`}
      onClick={handleCardClick}
      style={cardStyle}
    >
      <div className="card-body d-flex align-items-center justify-content-center">
        {card.isFaceUp ? card.value : "❓"}
      </div>
    </div>
  );
}

export default Card;









