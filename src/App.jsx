import { useState } from 'react';
import Board from './components/board';
import StatusMessage from './components/statusMessage';
import './styles.scss';
import { calculateWinner } from './winner';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(false);

  const winner = calculateWinner(square);

  const onClickSq = clickedPosition => {
    if (square[clickedPosition] || winner) {
      return;
    }

    setSquare(currSq => {
      return currSq.map((val, position) => {
        if (clickedPosition === position) {
          return isNextX ? 'X' : 'O';
        }

        return val;
      });
    });

    setIsNextX(currIsNextX => !currIsNextX);
  };

  return (
    <div className="app">
      <StatusMessage winner={winner} isNextX={isNextX} square={square} />
      <Board square={square} onClickSq={onClickSq} />
    </div>
  );
}

export default App;
