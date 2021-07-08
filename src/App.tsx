import Board from './components/Board/Board';
import Winner from './components/Winner/Winner';
import Reset from './components/Reset/Reset';
import useFunc from './components/Func/useFunc';
import './components/Winner/Winner.css'
import './App.css';

function App() {
    const board = useFunc();


    return (
        <div className="App">
            <Board board={board.board} handleClick={board.handleClick} />
            {board.winner ? <Winner winnerName={board.winner} /> : <p className="winner">There is no winner...</p>}
            <Reset />
        </div>
    );
}

export default App;