import React from 'react';
import { Badge } from 'react-tube-kit';
import getLinesFromStation from 'util/getLinesFromStation';

const StationHeader = ({ element }) => (
  <div className="d-flex flex-row justify-content-between align-items-center">
    <span>{element.name}</span>
    <div>
      {getLinesFromStation(element).map(line => {
        return (
          <Badge
            key={line._id}
            backgroundColor={line.colour}
            color={line.fontColour}
            className="ml-2"
          >
            {line.shortName}
          </Badge>
        );
      })}
    </div>
  </div>
);

export default StationHeader;
