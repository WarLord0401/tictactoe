const History = ({ history, moveTo, currMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {history.map((_, index) => (
          <li key={index}>
            <button
              className={`btn-move ${currMove === index ? 'active' : ''}`}
              type="button"
              style={{ fontWeight: currMove === index ? 'bold' : 'normal' }}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'Start' : `Move #${index} `}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
