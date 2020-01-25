import { SelectorLine } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-tube-kit';
import formFields from './station-filter.fields.json';

const StationFilter = ({ draft, onSubmit }) => {
  console.log(draft.lines);
  formFields[0].fieldProps.options = draft.lines;

  formFields[0].fieldProps.custom = SelectorLine;

  return (
    <Form
      autoSubmit
      showLabel={false}
      direction="horizontal"
      errorClassName="d-none"
      fields={formFields}
      onSubmit={onSubmit}
    />
  );
};

StationFilter.defaultProps = {
  onSubmit: () => {}
};

StationFilter.propTypes = {
  draft: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

export default StationFilter;
