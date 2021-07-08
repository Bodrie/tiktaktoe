import { useState } from 'react';

interface Func {
    board: string[],
    handleClick: (index: number) => void,
    winner: string
}

export default (): Func => {

    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");

    const winningConditions = [
        [0, 1, 2],
        [1, 4, 7],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2]
    ];

    const winX = (boardIndex: number ) => board[boardIndex] === "X";
    const winO = (boardIndex: number ) => board[boardIndex] === "O";

    const winner = winningConditions.reduce((acc, curr) => {

        if (curr.every(winX)) {
            return "X";

        }else if (curr.every(winO)) {
            return "O";

        } else {
            return acc;
        }
    }, '');

    const handleClick = (index: number): void => {

        if (!board[index] && winner === '') {
            const copyBoard = [...board];
            copyBoard.splice(index, 1, turn);

            setBoard(copyBoard);

            const newTurn = turn === "X" ? "O" : "X";
            setTurn(newTurn);
        }
    };
    
    //for (let i = 0; i <= winningConditions.length - 1; i++) {
    //    const winCondition = winningConditions[i];
    //    if(winCondition.every(winX)) {
    //        
    //    }
    //    if(winCondition.every(winO)) {
    //        
    //    }
    //}
    return {board, handleClick, winner}
}