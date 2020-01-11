import React from 'react';

const ConnectionHeader = ({ element }) => (
  <>
    {element ? (
      <div style={{ borderLeft: `10px solid ${element.line.colour}` }}>
        <span>{`${element.stations[0].name} - ${element.stations[1].name}`}</span>
      </div>
    ) : null}
  </>
);

export default ConnectionHeader;
