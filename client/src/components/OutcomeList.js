import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/OutcomeList.css';

function OutcomeList({ outcomes }) {
  return (
    <div className="outcomes-container">
      {outcomes.map(outcome => (
        <div key={outcome.id} className="outcome-item">
          <div className="outcome-name-container">
            <h4 className="outcome-name">{outcome.name}</h4>
            <p className="outcome-espanol">{outcome.nombreespanol}</p>
          </div>
          <div className="buttons-container">
            {outcome.value !== "" && <span className="check-mark">✔</span>}
            <Link to={`/outcome/${outcome.id}`}>
              <button className="view-button">View </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OutcomeList;

