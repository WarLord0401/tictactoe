import { useState } from 'react';
import Board from './components/board';
import './styles.scss';
import { calculateWinner } from './winner';
function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNextX, setIsNextX] = useState(false);
  const statusMsg = isNextX ? 'X' : 'O';
  const winner = calculateWinner(square);
  const statusWin = winner
    ? `Winner is ${winner}`
    : `next player: ${statusMsg}`;
  console.log('winner is ' + winner);
  const onClickSq = clickedPosition => {
    if (square[clickedPosition]) {
      return;
    }
    if (winner) {
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
      <Board square={square} onClickSq={onClickSq} />
      <h2>{statusWin}</h2>
    </div>
  );
}

export default App;
