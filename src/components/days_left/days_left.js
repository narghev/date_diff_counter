import React from 'react';

import './days_left.css';

export default ({number = null}) => number !== null ? (
  <div className="days_left_wrapper">
    <div>
      <span className="number">{number}</span>
      <span className="text">Days Left</span>
    </div>
  </div>
) : (
  <div className="days_left_wrapper">
    <span className="error">Select End Date</span>
  </div>
);