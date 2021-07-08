import { FC } from 'react';
import './Winner.css';

interface Winner {
    winnerName: string
}

const Winner: FC<Winner> = ({ winnerName }) => {
    return (
        <p className="winner">The winner is: {winnerName}</p>
    );
}
export default Winner;