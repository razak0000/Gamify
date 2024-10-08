import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="GAMES">
      <h1 className="title">OUR GAMES</h1>
      <div className="game_cards">
        <div className="game_card">
          <h2>Stone Paper Scissors</h2>
          <button onClick={() => navigate('/sps')}>Play</button>
        </div>
        
        <div className="game_card">
          <h2>Tic-Tac-Toe</h2>
          <button onClick={() => navigate('/xo-game')}>Play</button>
        </div>
        
        <div className="game_card">
          <h2>Snake and Ladder</h2>
          <button onClick={() => navigate('/S&L-game')}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
