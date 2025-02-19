import React, { useState } from 'react'

function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXTruen, setXTurn] = useState(true);

    const renderSquare = (index) => {
        return (
            <button onClick={() => { handleClick(index) }}>{board[index]}</button>
        )
    }

    const handleClick = (index) => {
        let newBoard = [...board];
        newBoard[index] = isXTruen ? "X" : "O"
        setBoard(newBoard);
        setXTurn(!isXTruen);
    }
    return (
        <div className='container'>
            <h1>Tic Tac Toe Game</h1>
            <div className='board'>
                <div className='board-row'>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className='board-row'>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className='board-row'>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    )
}

export default TicTacToe