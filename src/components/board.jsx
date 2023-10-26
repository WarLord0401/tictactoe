import Square from './square';

const Board = ({ square, onClickSq, winningSquare }) => {
  const renderSquare = position => {
    const isWinningSquare = winningSquare.includes(position);

    return (
      <Square
        value={square[position]}
        onClick={() => onClickSq(position)}
        isWinningSquare={isWinningSquare}
      />
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
