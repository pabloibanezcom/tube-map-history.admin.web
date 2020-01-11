import PropTypes from 'prop-types';
import React from 'react';

const SelectorStation = ({ className, station }) => {
  return (
    <div className={`d-flex align-items-center selector-station ${className}`}>
      {station.draft && station.draft.town && station.draft.town.logo ? (
        <img
          className="mr-2"
          style={{ height: 16 }}
          src={station.draft.town.logo}
          alt={station.name}
        />
      ) : null}
      {station.name}
    </div>
  );
};

SelectorStation.defaultProps = {
  className: ''
};

SelectorStation.propTypes = {
  className: PropTypes.string,
  station: PropTypes.object.isRequired
};

export default SelectorStation;
