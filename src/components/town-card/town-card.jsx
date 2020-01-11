import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Card, CountryLabel, Icon } from 'react-tube-kit';

const TownCard = ({ className, draft, town: { country, imgCard, name, year } }) => {
  const getColor = () => {
    if (!draft) {
      return 'white';
    }
    return draft.isPublished ? 'primary' : 'secondary';
  };

  return (
    <Card className={className} color={getColor()} imgSrc={imgCard} showImage="md-">
      <div className="d-flex flex-row justify-content-between">
        <div>
          <div className="font-size-18 font-weight-normal">{name}</div>
          <div>
            <CountryLabel country={country} size="sm" />
          </div>
        </div>
        <div className="text-right">
          <Badge type={draft && !draft.isPublished ? 'primary' : 'secondary'}>{year}</Badge>
          <div className="d-flex flex-row font-size-14 font-weight-normal">
            <div className="d-flex align-self-end align-items-center">
              <span>{draft.linesAmount}</span>
              <Icon name="lines" size="sm" className="align-middle" />
            </div>
            <div className="d-flex align-self-end align-items-center ml-2">
              <span>{draft.stationsAmount}</span>
              <Icon name="tube-logo" size="sm" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

TownCard.defaultProps = {
  className: '',
  draft: null
};

TownCard.propTypes = {
  className: PropTypes.string,
  draft: PropTypes.shape({
    isPublished: PropTypes.bool,
    linesAmount: PropTypes.number,
    stationsAmount: PropTypes.number
  }),
  town: PropTypes.shape({
    country: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string
    }),
    imgCard: PropTypes.string,

    name: PropTypes.string,

    year: PropTypes.number
  }).isRequired
};

export default TownCard;
