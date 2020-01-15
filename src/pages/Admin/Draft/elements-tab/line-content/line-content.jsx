import React from 'react';
import { Badge, Button } from 'react-tube-kit';
import InfoElement from '../info-element/info-element';

const LineContent = ({ bindings: { _startAction }, element }) => {
  return (
    <div>
      <h4 className="right-line right-line-secondary mb-2">Line info</h4>
      <div className="row">
        <div className="col-8">
          <InfoElement name="Name">{element.name}</InfoElement>
          <InfoElement name="Year">
            <Badge>{element.year}</Badge>
          </InfoElement>
          <InfoElement name="Stations">{element.stations}</InfoElement>
          <InfoElement name="Distance">{element.distance}</InfoElement>
        </div>
        <div className="col-4">
          <InfoElement name="Color">
            <Badge border backgroundColor={element.colour} color={element.fontColour}>
              {element.colour}
            </Badge>
          </InfoElement>
          <InfoElement name="Font color">
            <Badge outline type="secondary">
              {element.fontColour}
            </Badge>
          </InfoElement>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <Button
            block
            inverse
            hover="primary"
            backgroundColor={element.colour}
            fontColor={element.fontColour}
          >
            View stations
          </Button>
        </div>
        <div className="col-md-4">
          <Button block outline color="secondary" onClick={() => _startAction('EditLine', element)}>
            Edit line
          </Button>
        </div>
        <div className="col-md-4">
          <Button block outline color="danger" onClick={() => _startAction('DeleteLine', element)}>
            Delete line
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LineContent;
