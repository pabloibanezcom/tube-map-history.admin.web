import React from 'react';

const LineHeader = ({ element }) => (
  <div style={{ borderLeft: `10px solid ${element.colour}` }}>
    <span>{element.name}</span>
  </div>
);

export default LineHeader;
