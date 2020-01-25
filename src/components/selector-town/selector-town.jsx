import PropTypes from 'prop-types';
import React from 'react';
// import CountryLabel from 'react-tube-kit';

const SelectorTown = ({ className, town }) => {
  console.log(town);
  return (
    <div className={`d-flex align-items-center selector-town ${className}`}>
      {town ? <span>{town.name}</span> : null}
    </div>
  );
};

SelectorTown.defaultProps = {
  className: ''
};

SelectorTown.propTypes = {
  className: PropTypes.string,
  town: PropTypes.object.isRequired
};

export default SelectorTown;
