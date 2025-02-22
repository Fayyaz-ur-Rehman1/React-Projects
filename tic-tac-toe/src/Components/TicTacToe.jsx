import React, { useState } from "react";
import "../App.css";

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXTurn ? "X" : "O";
        setBoard(newBoard);
        setIsXTurn(!isXTurn);
    };

    const restartGame = () => {
        setBoard(Array(9).fill(null));
        setIsXTurn(true);
    };

    return (
        <div className="container">
            <h1>Tic Tac Toe</h1>
            <div className="status">{winner ? `Winner: ${winner}` : `Next Player: ${isXTurn ? "X" : "O"}`}</div>
            <div className="board">
                {board.map((value, index) => (
                    <button key={index} onClick={() => handleClick(index)}>{value}</button>
                ))}
            </div>
            <button className="restart" onClick={restartGame}>Restart</button>
        </div>
    );
}

function calculateWinner(board) {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of winningCombinations) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export default TicTacToe;