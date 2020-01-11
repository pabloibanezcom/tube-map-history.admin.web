import React from 'react';
import { Badge, Button } from 'react-tube-kit';
import InfoElement from '../info-element/info-element';

const ConnectionContent = ({ bindings: { _startAction }, element }) => {
  return (
    <div>
      <h4 className="right-line right-line-secondary mb-2">Connection info</h4>
      <div className="row">
        <div className="col-5">
          <InfoElement name="Line">
            <Badge backgroundColor={element.line.colour} color={element.line.fontColour}>
              {element.line.shortName}
            </Badge>
          </InfoElement>
          <InfoElement name="From">{element.stations[0].name}</InfoElement>
        </div>
        <div className="col-3">
          <InfoElement name="Year">
            <Badge>{element.year}</Badge>
          </InfoElement>
          <InfoElement name="To">{element.stations[1].name}</InfoElement>
        </div>
        <div className="col-4">
          <InfoElement name="Distance">{`${element.distance} m`}</InfoElement>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4" />
        <div className="col-md-4">
          <Button
            block
            outline
            color="secondary"
            onClick={() => {
              _startAction('EditConnection', {
                ...element,
                from: element.stations[0],
                to: element.stations[1]
              });
            }}
          >
            Edit connection
          </Button>
        </div>
        <div className="col-md-4">
          <Button block outline color="danger">
            Delete connection
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectionContent;
