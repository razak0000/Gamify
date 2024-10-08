import React from 'react';
import  Paper from './paper.png'
import  Stone from './stone.png'
import  Scissors from './kathi.png'


function PlayerChoice({ onPlayerChoice }) {
  return (
    <div className="buttons">
      <button onClick={() => onPlayerChoice('Rock')}>
        <img src={Stone} alt="Rock" className="button-image" />
      </button>
      <button onClick={() => onPlayerChoice('Paper')}>
        <img src={Paper} alt="Paper" className="button-image" />
      </button>
      <button onClick={() => onPlayerChoice('Scissors')}>
        <img src={Scissors} alt="Scissors" className="button-image" />
      </button>
    </div>
  );
}

export default PlayerChoice;
