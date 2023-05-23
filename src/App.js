import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  return (
    <>
      <h1 className='center_horizontally'>Tic - Tac - Toe</h1>
      <Game />
    </>
  );

}

function Game() {
  return (<Board />);
};

function Board() {
  const arrSquares = Array(9).fill(null);
  let [squares, setSquares] = useState(arrSquares);
  let [str, setStr] = useState('X');
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]} onClickEvent={() => handleClick(i)} />
    );
  }
  const winner = Winner(squares);
  const status = winner? `player ${winner} won`:(str == "X" ? "Next player: X" : "Next player: O");
  

  const handleClick = (i) => {
    if(winner || squares[i]) return;
      const saveSquares = [...squares];
      saveSquares[i] = str;
      setSquares(saveSquares);
      setStr(str == "X" ? "O" : "X");
    
  };

  return (
    <div>
      {checkNewGame(winner)}
     
      <h2>{status}</h2>
      <div className='board-row'> {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}</div> {/*colum 1 */}
      <div className='board-row'> {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}</div> {/*colum 2 */}
      <div className='board-row'> {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}</div> {/*colum 3 */}
    </div>
  );
};

const Square = (props) => {
  return (
    <button className='square' onClick={props.onClickEvent}>{props.value}</button>
  );
};

const Winner = (squares) => {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // טורים
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // שורות
    [0, 4, 8], [2, 4, 6]// אלכסונים
  ]

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
      return squares[a];

  }
  return null;
}

const checkNewGame = (winner) =>{
  return winner? <StartNewGame/>:"";
}

const StartNewGame =()=>
{

  return(
    <a href="" class="glightbox_video"> 
    <svg width="131" height="131" viewBox="0 0 131 131" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path class="inner-circle" d="M65 21C40.1488 21 20 41.1488 20 66C20 90.8512 40.1488 111 65 111C89.8512 111 110 90.8512 110 66C110 41.1488 89.8512 21 65 21Z" fill="white"></path>
        <circle class="outer_circle" cx="65.5" cy="65.5" r="64" stroke="white"></circle>
        <path class="play" fill-rule="evenodd" clip-rule="evenodd" d="M60 76V57L77 66.7774L60 76Z" fill="#BF2428"></path>
    </svg>
    </a>
  );

}

export default App;
