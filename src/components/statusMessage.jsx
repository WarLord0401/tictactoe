const StatusMessage = ({ winner, gamingBoard }) => {
  const { square, isNextX } = gamingBoard;
  const statusMsg = isNextX ? 'X' : 'O';
  const noMoveLeft = square.every(val => val !== null);
  const renderStatusMsg = () => {
    if (winner) {
      return (
        <>
          Winner :{' '}
          <span className={winner === 'O' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      );
    }
    if (!winner && noMoveLeft) {
      return (
        <>
          <span className="text-orange">X</span> and{' '}
          <span className="text-green">O</span> tied!
        </>
      );
    }
    if (!winner && !noMoveLeft) {
      return (
        <>
          Next Player :{' '}
          <span className={isNextX ? 'text-orange' : 'text-green'}>
            {statusMsg}
          </span>
        </>
      );
    }
    return null;
  };
  return <div className="status-message">{renderStatusMsg()}</div>;
};
export default StatusMessage;
