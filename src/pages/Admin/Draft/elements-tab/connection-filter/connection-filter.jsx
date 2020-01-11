import { SelectorLine, SelectorStation } from 'components';
import Api from 'http';
import searchStationsParams from 'http/defaultParams/searchStations.json';
import PropTypes from 'prop-types';
import React from 'react';
import { Form } from 'react-tube-kit';
import formFields from './connection-filter.fields.json';

const ConnectionFilter = ({ draft, onSubmit }) => {
  formFields[0].fieldProps.options = draft.lines;
  formFields[1].fieldProps.remoteOptions = {
    apiMethod: str =>
      Api.station.search(draft._id, {
        ...searchStationsParams,
        filter: { name: str },
        populate: [{ path: 'draft', select: 'town', populate: { path: 'town', select: 'logo' } }]
      }),
    dataProp: 'elements'
  };

  formFields[0].fieldProps.custom = SelectorLine;
  formFields[1].fieldProps.custom = SelectorStation;

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

ConnectionFilter.defaultProps = {
  onSubmit: () => {}
};

ConnectionFilter.propTypes = {
  draft: PropTypes.object.isRequired,
  onSubmit: PropTypes.func
};

export default ConnectionFilter;
