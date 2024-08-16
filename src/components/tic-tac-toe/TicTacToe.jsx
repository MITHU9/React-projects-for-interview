import { useState } from "react";
import "./styles.css";

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;
    squares[index] = currentPlayer;
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setSquares([...squares]);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner is: ${winner}`
    : squares.every((square) => square !== "")
    ? "Match is Draw! Restart the game..."
    : `Next player: ${currentPlayer}`;

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setCurrentPlayer("X");
  };

  const restartButton =
    winner || squares.every((square) => square !== "") ? (
      <button className="reset-btn" onClick={resetGame}>
        Restart Game
      </button>
    ) : null;

  return (
    <div className="tic-tac-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>

      <h1>{status}</h1>
      {restartButton}
    </div>
  );
};

export default TicTacToe;
