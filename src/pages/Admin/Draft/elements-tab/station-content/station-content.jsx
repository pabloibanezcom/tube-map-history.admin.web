import React from 'react';
import { Badge, Button } from 'react-tube-kit';
import InfoElement from '../info-element/info-element';

const StationsContent = ({ bindings: { _startAction }, element }) => {
  const ConnectionInfo = ({ connection, elementId }) => (
    <div
      className="d-flex justify-content-between pl-2 mb-1 "
      style={{ borderLeft: `5px solid ${connection.line.colour}` }}
    >
      <div>
        <span className="text-primary mr-4">{connection.year}</span>
        <span className="mr-4">{connection.stations.find(s => s._id !== elementId).name}</span>
      </div>
      <div>
        <Badge backgroundColor={connection.line.colour} color={connection.line.fontColour}>
          {connection.line.shortName}
        </Badge>
      </div>
    </div>
  );

  return (
    <div>
      <div className="row">
        <div className="col-6">
          <h4 className="right-line right-line-secondary mb-2">Station info</h4>
          <InfoElement name="Name">{element.name}</InfoElement>
          <InfoElement name="Year">
            <Badge>{element.year}</Badge>
          </InfoElement>
        </div>
        <div className="col-6">
          <h4 className="right-line right-line-secondary mb-2">Connections</h4>
          {element.connections
            .sort((a, b) => a.year - b.year)
            .map(connection => (
              <ConnectionInfo
                key={connection._id}
                connection={connection}
                elementId={element._id}
              />
            ))}
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-4" />
        <div className="col-md-4">
          <Button
            block
            outline
            color="secondary"
            onClick={() => _startAction('EditStation', element)}
          >
            Edit station
          </Button>
        </div>
        <div className="col-md-4">
          <Button block outline color="danger">
            Delete station
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StationsContent;
