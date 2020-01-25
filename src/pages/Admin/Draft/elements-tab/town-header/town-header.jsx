import React from 'react';
import { CountryLabel } from 'react-tube-kit';

const TownHeader = ({ element }) => (
  <div>
    <CountryLabel country={element.country} customName={element.name} />
  </div>
);

export default TownHeader;
