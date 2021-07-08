import { FC } from "react";
import './Square.css';

interface Props {
    index: number,
    value: string,
    handleClick: () =>  void
}

const Square: FC<Props> = ({ value, handleClick }) => {
    return (
        <button className="board-square" onClick={() => handleClick()}>{value}</button>
    );
}

export default Square;