import { FC } from "react";
import './Square.css';

interface Props {
    index: number,
    value: string,
    handleClick(index: number): void
}

const Square: FC<Props> = ({ index, value, handleClick }) => {
    return (
        <button className="board-square" onClick={() => handleClick(index)}>{value}</button>
    );
}

export default Square;