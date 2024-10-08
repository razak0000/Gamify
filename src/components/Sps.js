import React, { useState } from 'react';
import './Sps.css';
import Rock from '../components/sps/stone.png';
import Paper from '../components/sps/paper.png';
import Scissors from '../components/sps/kathi.png';

const Sps = () => {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [gameResult, setGameResult] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      return 'It\'s a Draw! 😊';
    } else if (
      (player === 'Rock' && computer === 'Scissors') ||
      (player === 'Paper' && computer === 'Rock') ||
      (player === 'Scissors' && computer === 'Paper')
    ) {
      return 'You Win! 😁';
    } else {
      return 'You Lose! 😒';
    }
  };

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    setLoading(true); // Start loading effect

    setTimeout(() => {
      const computerGeneratedChoice = generateComputerChoice();
      setComputerChoice(computerGeneratedChoice);
      const result = determineWinner(choice, computerGeneratedChoice);
      setGameResult(result);
      setLoading(false); // End loading effect
    }, 400); // Simulating delay (2 seconds)
  };

  return (
    <div className='main-container'>
      <h1 className='heading'>Rock Paper Scissors</h1>
      <div className='buttons'>
        <button className='btn' onClick={() => handlePlayerChoice('Rock')}>
          <img src={Rock} className='button-image' alt='Rock' />
        </button>
        <button className='btn' onClick={() => handlePlayerChoice('Paper')}>
          <img src={Paper} className='button-image' alt='Paper' />
        </button>
        <button className='btn' onClick={() => handlePlayerChoice('Scissors')}>
          <img src={Scissors} className='button-image' alt='Scissors' />
        </button>
      </div>
      <div className='result-section'>
        {loading ? (
          <div className="loading-spinner"></div>
        ) : (
          <>
            <p className='result-text'>
              {playerChoice && `You chose: ${playerChoice}`}
            </p>
            <p className='result-text'>
              {computerChoice && `Computer chose: ${computerChoice}`}
            </p>
            <p className='result-text result-outcome'>
              {gameResult}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Sps;
