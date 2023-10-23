import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  console.log(square);
  const onClickSq = clickedPosition => {
    setSquare(currSq => {
      return currSq.map((val, position) => {
        if (clickedPosition == position) {
          return 'X';
        }
        return val;
      });
    });
  };
  const renderSquare = position => {
    return (
      <Square value={square[position]} onClick={() => onClickSq(position)} />
    );
  };
  return (
    <div className="board">
      <div className="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;
