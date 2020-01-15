import PropTypes from 'prop-types';
import React from 'react';
import { Badge, Card, CountryLabel, Icon } from 'react-tube-kit';

const TownCard = ({
  className,
  draft,
  showLink,
  size,
  town: { _id, country, imgCard, name, year },
  onImageClick
}) => {
  const getColor = () => {
    if (!draft) {
      return 'white';
    }
    return draft.isPublished ? 'primary' : 'secondary';
  };

  const getNameClass = () => {
    switch (size) {
      case 'lg':
        return 'font-size-18 font-weight-normal';
      case 'md':
        return 'font-size-16 font-weight-normal';
      case 'sm':
        return 'font-size-14 font-weight-normal';
      default:
        return '';
    }
  };

  const getDraftDataClass = () => {
    switch (size) {
      case 'lg':
        return 'font-size-14 font-weight-normal';
      case 'md':
        return 'font-size-12 font-weight-normal';
      case 'sm':
        return 'font-size-10 font-weight-normal';
      default:
        return '';
    }
  };

  const getCountrySize = () => {
    switch (size) {
      case 'lg':
        return 'md';
      case 'md':
        return 'sm';
      case 'sm':
        return 'xs';
      default:
        return '';
    }
  };

  const getImgButtonText = () => {
    return draft ? 'Manage draft' : 'Create draft for town';
  };

  return (
    <Card
      className={className}
      color={getColor()}
      imgSrc={imgCard}
      imgButtonText={showLink ? getImgButtonText() : null}
      onImageClick={() => onImageClick(draft ? 'draft' : 'town', draft ? draft._id : _id)}
    >
      <div className="d-flex flex-row justify-content-between">
        <div>
          <div className={getNameClass()}>{name}</div>
          <div>
            <CountryLabel country={country} size={getCountrySize()} />
          </div>
        </div>
        <div className="text-right">
          <Badge type={draft && !draft.isPublished ? 'primary' : 'secondary'} size={size}>
            {year}
          </Badge>
          {draft ? (
            <div className={`d-flex flex-row ${getDraftDataClass()}`}>
              <div className="d-flex align-self-end align-items-center">
                <span>{draft.linesAmount}</span>
                <Icon name="lines" size="sm" className="align-middle" />
              </div>
              <div className="d-flex align-self-end align-items-center ml-2">
                <span>{draft.stationsAmount}</span>
                <Icon name="tube-logo" size="sm" />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Card>
  );
};

TownCard.defaultProps = {
  className: '',
  draft: null,
  showLink: false,
  size: 'md',
  onImageClick: () => {}
};

TownCard.propTypes = {
  className: PropTypes.string,
  draft: PropTypes.shape({
    isPublished: PropTypes.bool,
    linesAmount: PropTypes.number,
    stationsAmount: PropTypes.number
  }),
  showLink: PropTypes.bool,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  town: PropTypes.shape({
    country: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string
    }),
    imgCard: PropTypes.string,

    name: PropTypes.string,

    year: PropTypes.number
  }).isRequired,
  onImageClick: PropTypes.func
};

export default TownCard;
