import Board from './components/Board/Board';
import useFunc from './components/Func/useFunc';
import './App.css';

function App() {
    const board = useFunc();
    return (
        <div className="App">
            <Board board={board.board} handleClick={board.handleClick} />
        </div>
    );
}

export default App;