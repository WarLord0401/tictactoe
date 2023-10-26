const Square = ({ value, onClick, isWinningSquare }) => {
  const a = value === 'X' ? 'text-orange' : 'text-green';
  const b = isWinningSquare ? 'winning' : '';
  return (
    <button type="button" className={`square ${a} ${b}`} onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
