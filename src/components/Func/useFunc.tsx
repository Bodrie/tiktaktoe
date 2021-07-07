import { useState } from 'react';

interface Func {
    board: string[],
    handleClick: (index: number) => void
}

export default (): Func => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");

    const handleClick = (index: number): void => {
        
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);

        setBoard(newBoard);

        const newTurn = turn === "X" ? "O" : "X";
        setTurn(newTurn);

    };

    return {board, handleClick}
}
