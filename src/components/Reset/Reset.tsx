import { FC } from "react";
import './Reset.css';

const Reset: FC = () => {
    return (
        <button className="reset-button" onClick={() => {window.location.reload()}}>Restart Game</button>
    );
}

export default Reset;