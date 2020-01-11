import PropTypes from 'prop-types';
import React from 'react';

const SelectorLine = ({ className, line: { colour, shortName } }) => {
  return (
    <div
      className={`d-flex align-items-center selector-line ${className}`}
      style={{ borderLeft: colour ? `10px solid ${colour}` : null }}
    >
      {shortName}
    </div>
  );
};

SelectorLine.defaultProps = {
  className: ''
};

SelectorLine.propTypes = {
  className: PropTypes.string,
  line: PropTypes.shape({
    colour: PropTypes.string,
    shortName: PropTypes.string
  }).isRequired
};

export default SelectorLine;
