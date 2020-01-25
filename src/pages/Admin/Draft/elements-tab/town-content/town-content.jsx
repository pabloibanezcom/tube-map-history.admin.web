import React from 'react';
import { Badge, Button, CountryLabel } from 'react-tube-kit';
import InfoElement from '../info-element/info-element';

const TownContent = ({ bindings: { _startAction }, element }) => {
  return (
    <div>
      <h4 className="right-line right-line-secondary mb-2">Town info</h4>
      <div className="row">
        <div className="col-8">
          <InfoElement name="Name">{element.name}</InfoElement>
          <InfoElement name="Country">
            <CountryLabel country={element.country} />
          </InfoElement>
        </div>
        <div className="col-4">
          <InfoElement name="Alias">{element.alias}</InfoElement>
          <InfoElement name="Year">
            <Badge>{element.year}</Badge>
          </InfoElement>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4" />
        <div className="col-md-4">
          <Button block outline color="secondary" onClick={() => _startAction('EditTown', element)}>
            Edit town
          </Button>
        </div>
        <div className="col-md-4">
          <Button block outline color="danger" onClick={() => _startAction('DeleteTown', element)}>
            Delete town
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TownContent;
