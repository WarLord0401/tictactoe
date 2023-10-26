import { useState } from 'react';
import Board from './components/board';
import History from './components/history';
import StatusMessage from './components/statusMessage';
import './styles.scss';
import { calculateWinner } from './winner';
const NEW_GAME = [{ square: Array(9).fill(null), isNextX: false }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);

  const [currMove, setCurrMove] = useState(0);

  const gamingBoard = history[currMove];
  const { winner, winningSquare } = calculateWinner(gamingBoard.square);

  const onClickSq = clickedPosition => {
    if (gamingBoard.square[clickedPosition] || winner) {
      return;
    }

    setHistory(currHist => {
      const isTraversing = currMove + 1 !== currHist.length;
      const lastGamingState = isTraversing
        ? history[currMove]
        : history[currHist.length - 1];

      const nextSqState = lastGamingState.square.map((val, position) => {
        if (clickedPosition === position) {
          return lastGamingState.isNextX ? 'X' : 'O';
        }
        return val;
      });

      const base = isTraversing
        ? currHist.slice(0, currHist.indexOf(lastGamingState) + 1)
        : currHist;

      return base.concat({
        square: nextSqState,
        isNextX: !lastGamingState.isNextX,
      });
    });

    setCurrMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} gamingBoard={gamingBoard} />
      <Board
        square={gamingBoard.square}
        onClickSq={onClickSq}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        onClick={() => {
          setHistory(NEW_GAME);
          setCurrMove(0);
        }}
        className={`btn-reset ${
          winner || (!winner && gamingBoard.square.every(val => val !== null))
            ? 'active'
            : ''
        }`}
      >
        NEW GAME
      </button>
      <h2>Current Game</h2>
      <History history={history} moveTo={moveTo} currMove={currMove} />
    </div>
  );
}

export default App;
