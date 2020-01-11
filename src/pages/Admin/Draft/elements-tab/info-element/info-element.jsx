import React from 'react';

const InfoElement = ({ children, name }) => (
  <div className="d-flex flex-row">
    <div style={{ width: 75, opacity: 0.8 }}>{name}</div>
    <div className="font-weight-normal">{children}</div>
  </div>
);

export default InfoElement;
