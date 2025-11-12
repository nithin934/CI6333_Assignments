import React, { useState } from "react";
import "./TicTacToe.css";

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    if (winner || board[i]) return;

    const newBoard = [...board];
    newBoard[i] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  function calculateWinner(squares) {
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
    for (let [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Tic Tac Toe</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 80px)",
          gridGap: "10px",
          justifyContent: "center",
          margin: "20px auto",
        }}
      >
        {board.map((square, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{
              width: "80px",
              height: "80px",
              fontSize: "24px",
              fontWeight: "bold",
              background: "#fff",
              border: "2px solid #333",
              cursor: "pointer",
            }}
          >
            {square}
          </button>
        ))}
      </div>
      <h3>
        {winner
          ? `Winner: ${winner}`
          : `Next Player: ${xIsNext ? "X" : "O"}`}
      </h3>
      <button
        onClick={handleReset}
        style={{
          padding: "8px 16px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Reset Game
      </button>
    </div>
  );
}

export default TicTacToe;
