import { FC } from "react";
import Square from "../Square/Square";
import './Board.css';

interface Props {
    board: string[],
    handleClick(index: number): void
}

const Board: FC<Props> = ({ board, handleClick }) => {

    return (
        <div className="board-grid">
            {board.map((value, index) => (
                <Square
                    key={index}
                    value={value}
                    index={index}
                    handleClick={() => handleClick(index)}
                />
            ))}
        </div>
    );

}

export default Board;