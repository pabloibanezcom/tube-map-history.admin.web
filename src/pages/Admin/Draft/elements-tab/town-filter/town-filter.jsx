import { SelectorTown } from 'components';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-tube-kit';
import formFields from './town-filter.fields.json';

const TownFilter = ({ countries, onSubmit }) => {
  console.log(countries);
  formFields[0].fieldProps.options = countries;

  formFields[0].fieldProps.custom = SelectorTown;

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

TownFilter.defaultProps = {
  countries: [],
  onSubmit: () => {}
};

TownFilter.propTypes = {
  countries: PropTypes.array,
  onSubmit: PropTypes.func
};

export default TownFilter;
