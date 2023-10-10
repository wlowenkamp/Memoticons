import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="landing-page text-center">
      <h1 className="text-center">MEMOTICONS</h1>
      <h5 className="text-center">The Emoticon-Matching Game</h5>
      <p>Select a grid size to start the game:</p>
      <div className="btn-group">
        <Link to="/game?grid=4x4">
          <button className="btn btn-secondary mx-2">4x4</button>
        </Link>
        <Link to="/game?grid=8x4">
          <button className="btn btn-secondary mx-2">8x4</button>
        </Link>
        <Link to="/game?grid=8x6">
          <button className="btn btn-secondary mx-2">8x6</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;






