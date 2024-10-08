import React, { useState } from 'react';
import "./Card.css";

function Xogame() {
    const [count, setClickCount] = useState(0);
    const [values, setValues] = useState({
      c1: null, c2: null, c3: null, c4: null, c5: null, c6: null, c7: null, c8: null, c9: null
    });
    const [gameOver, setGameOver] = useState(false);
    const [result, setResult] = useState("No winner Yet");
  
    const winningCombinations = [
      ['c1', 'c2', 'c3'],
      ['c4', 'c5', 'c6'],
      ['c7', 'c8', 'c9'],
      ['c1', 'c5', 'c9'],
      ['c3', 'c5', 'c7']
    ];
  
    function handleClick(id) {
      if (values[id] === null && !gameOver) {
        const newValues = { ...values, [id]: 'X' };
        setValues(newValues);
        setClickCount(count + 1);
  
        if (!checkWinner(newValues)) {
          setTimeout(() => computerMove(newValues), 500); // Delay for computer's move
        }
      }
    }
  
    function computerMove(newValues) {
      const emptyCells = Object.keys(newValues).filter(key => newValues[key] === null);
      if (emptyCells.length === 0 || gameOver) return;
  
      const randomIndex = Math.floor(Math.random() * emptyCells.length);
      const randomCell = emptyCells[randomIndex];
      const updatedValues = { ...newValues, [randomCell]: 'O' };
      setValues(updatedValues);
  
      if (checkWinner(updatedValues)) {
        setGameOver(true);
        setResult(`Player O wins`);
      }
    }
  
    function checkWinner(newValues) {
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
        if (newValues[a] && newValues[a] === newValues[b] && newValues[a] === newValues[c]) {
          setGameOver(true);
          setResult(`Player ${newValues[a]} wins`);
          return newValues[a];
        }
      }
        if (Object.values(newValues).every(TRue => TRue)){
            setResult("It's a draw!");
              setGameOver(true);
               return true; // Game over

        }
      return false;
    }

    // const [clickCount, setClickCount] = useState(0);
    // const [values, setValues] = useState({
    //     c1: null, c2: null, c3: null,
    //     c4: null, c5: null, c6: null,
    //     c7: null, c8: null, c9: null,
    // });
    // const [gameOver, setGameOver] = useState(false);
    // const [result, setResult] = useState("No Winner Yet");

    // const winningCombinations = [
    //     ['c1', 'c2', 'c3'], // First row
    //     ['c4', 'c5', 'c6'], // Second row
    //     ['c7', 'c8', 'c9'], // Third row
    //     ['c1', 'c4', 'c7'], // First column
    //     ['c2', 'c5', 'c8'], // Second column
    //     ['c3', 'c6', 'c9'], // Third column
    //     ['c1', 'c5', 'c9'], // Diagonal from top-left
    //     ['c3', 'c5', 'c7'], // Diagonal from top-right
    // ];

    // function handleClick(id) {
    //     if (values[id] || gameOver) return; // Ignore if cell is already clicked or game is over

    //     const newClickCount = clickCount + 1;
    //     const newValues = { ...values, [id]: 'X' }; // Player is 'X'
    //     setClickCount(newClickCount);
    //     setValues(newValues);

    //     if (!checkWinner(newValues)) {
    //         setTimeout(() => computerMove(newValues), 500); // Delay for computer's move
    //     }
    // }

    // function computerMove(newValues) {
    //     const availableCells = Object.keys(newValues).filter(key => !newValues[key]);
    //     if (availableCells.length === 0 || gameOver) return;

    //     const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
    //     const updatedValues = { ...newValues, [randomCell]: 'O' }; // Computer is 'O'

    //     setValues(updatedValues);
    //     setClickCount(prevCount => prevCount + 1);
    //     checkWinner(updatedValues);
    // }

    // function checkWinner(newValues) {
    //     for (let combo of winningCombinations) {
    //         const [a, b, c] = combo;
    //         if (newValues[a] && newValues[a] === newValues[b] && newValues[a] === newValues[c]) {
    //             setResult(`Player ${newValues[a]} Wins!`);
    //             setGameOver(true);
    //             return true; // Game over
    //         }
    //     }

    //     if (Object.values(newValues).every(cell => cell)) {
    //         setResult("It's a draw!");
    //         setGameOver(true);
    //         return true; // Game over
    //     }

    //     return false; // Game continues
    // }
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td id="c1" onClick={() => handleClick('c1')}>{values.c1}</td>
                        <td id="c2" onClick={() => handleClick('c2')}>{values.c2}</td>
                        <td id="c3" onClick={() => handleClick('c3')}>{values.c3}</td>
                    </tr>
                    <tr>
                        <td id="c4" onClick={() => handleClick('c4')}>{values.c4}</td>
                        <td id="c5" onClick={() => handleClick('c5')}>{values.c5}</td>
                        <td id="c6" onClick={() => handleClick('c6')}>{values.c6}</td>
                    </tr>
                    <tr>
                        <td id="c7" onClick={() => handleClick('c7')}>{values.c7}</td>
                        <td id="c8" onClick={() => handleClick('c8')}>{values.c8}</td>
                        <td id="c9" onClick={() => handleClick('c9')}>{values.c9}</td>
                    </tr>
                </tbody>
            </table>

            <h1>Winning Result: {result}</h1>
            
        </div>
    );
};;

export default Xogame;
