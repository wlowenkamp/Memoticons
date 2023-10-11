import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import Board from './Board';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game/*" element={<Game />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
}

export default App;










