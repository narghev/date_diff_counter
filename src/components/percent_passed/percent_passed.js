import React from 'react';

import './percent_passed.css';

export default ({percent = null}) => percent && (
  <div className="percent_wrapper">
    <div>
      <span className="text">Stay Tight! </span>
      <span className="percent">{percent}</span>
      <span className="sign">% </span>
      <span className="text">has passed</span>
    </div>
  </div>
);