import React, { useState } from 'react';
import './SL.css';

const SnakeLadder = () => {
  const [numPlayers, setNumPlayers] = useState(2);
  const [players, setPlayers] = useState(Array(numPlayers).fill(0));
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(0);
  const [message, setMessage] = useState('');
  const [rankings, setRankings] = useState([]);

  const number = [1, 2, 3, 4, 5, 6];
  
  const snakesLadders = {
    16: { target: 6, type: 'snake' },
    47: { target: 26, type: 'snake' },
    49: { target: 11, type: 'snake' },
    56: { target: 53, type: 'snake' },
    62: { target: 19, type: 'snake' },
    64: { target: 60, type: 'snake' },
    87: { target: 24, type: 'snake' },
    93: { target: 73, type: 'snake' },
    95: { target: 75, type: 'snake' },
    98: { target: 78, type: 'snake' },
    1: { target: 38, type: 'ladder' },
    4: { target: 14, type: 'ladder' },
    9: { target: 31, type: 'ladder' },
    21: { target: 42, type: 'ladder' },
    28: { target: 84, type: 'ladder' },
    36: { target: 44, type: 'ladder' },
    51: { target: 67, type: 'ladder' },
    71: { target: 91, type: 'ladder' },
    80: { target: 100, type: 'ladder' },
  };

  // Define colors for players
  const playerColors = ['red', 'blue', 'green', 'yellow'];

  const rollDice = () => {
    if (rankings.length >= numPlayers) {
      setMessage("Game over. All players have finished.");
      return;
    }
  
    const randomNum = number[Math.floor(Math.random() * number.length)];
    setRandomNumber(randomNum);
  
    setPlayers(prevPlayers => {
      const newPositions = [...prevPlayers];
      let newPosition = newPositions[currentPlayer];
  
      if (newPosition === 0 && randomNum !== 1) {
        setMessage(`Player ${currentPlayer + 1} needs a 1 to start.`);
        setCurrentPlayer((currentPlayer + 1) % numPlayers);
        return prevPlayers;
      }
  
      newPosition += randomNum;
  
      // Ensure newPosition doesn’t exceed 100
      if (newPosition > 100) {
        setMessage(`Player ${currentPlayer + 1} rolled too high! They need exactly ${100 - prevPlayers[currentPlayer]} to win.`);
        setCurrentPlayer((currentPlayer + 1) % numPlayers);
        return prevPlayers;
      }
  
      // Check for snakes or ladders
      const snakeOrLadder = snakesLadders[newPosition];
      if (snakeOrLadder) {
        newPosition = snakeOrLadder.target;
        setMessage(`Player ${currentPlayer + 1} hit a ${snakeOrLadder.type === 'snake' ? 'snake' : 'ladder'}!`);
      }
  
      // If exactly 100, update rankings
      if (newPosition === 100 && !rankings.includes(currentPlayer + 1)) {
        setRankings([...rankings, currentPlayer + 1]);
        setMessage(`Player ${currentPlayer + 1} reached position 100!`);
      }
  
      newPositions[currentPlayer] = newPosition;
  
      // Only pass turn if player didn’t roll a 1 or 6
      if (randomNum !== 1 && randomNum !== 6) {
        setCurrentPlayer((currentPlayer + 1) % numPlayers);
      }
  
      return newPositions;
    });
  };
  
  const board = Array.from({ length: 100 }, (_, i) => {
    const position = 100 - i;
    const playerIcons = players.map((pos, idx) => 
      pos === position ? <span key={idx} className={`player player${idx + 1}`} style={{ backgroundColor: playerColors[idx] }}></span> : null
    );

    const snakeOrLadder = snakesLadders[position];

    return (
      <div key={position} className={`boardSquare ${snakeOrLadder ? snakeOrLadder.type : ''}`}>
        {position}
        {playerIcons}
      </div>
    );
  });

  return (
    <div className="gameContainer">
      <h1>Snake and Ladder Game</h1>
      <label>
        Number of Players:
        <select value={numPlayers} onChange={(e) => {
          const num = parseInt(e.target.value);
          setNumPlayers(num);
          setPlayers(Array(num).fill(0));
          setCurrentPlayer(0);
          setMessage('');
          setRankings([]);
        }}>
          {[2, 3, 4].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>

      {/* Display Player Colors */}
      <div className="playerColors">
        <h3>Player Colors:</h3>
        {Array.from({ length: numPlayers }, (_, idx) => (
          <div key={idx} style={{ color: playerColors[idx] }}>
            Player {idx + 1}: <span style={{ display: 'inline-block', width: '20px', height: '20px', backgroundColor: playerColors[idx] }}></span>
          </div>
        ))}
      </div>

      <div className="boardContainer">
        {board}
      </div>

      <div className="gameStatus">
        <div className="dice">
          <h2>Dice Roll: {randomNumber}</h2>
          <p>Current Turn: Player {currentPlayer + 1}</p>
          <p>{message}</p>
        </div>

        <div className="rankings">
          <h3>Rankings</h3>
          {rankings.length > 0 ? (
            rankings.map((player, index) => (
              <p key={player}>Player {player} - {index + 1}{index === 0 ? "st" : index === 1 ? "nd" : index === 2 ? "rd" : "th"} Place</p>
            ))
          ) : (
            <p>No players finished yet.</p>
          )}
        </div>
      </div>

      <button onClick={rollDice}>Roll the Dice</button>
    </div>
  );
};

export default SnakeLadder;
