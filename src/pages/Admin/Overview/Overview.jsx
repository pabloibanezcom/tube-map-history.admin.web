import TownCard from 'components/town-card/town-card';
import React, { useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Carousel, Map } from 'react-tube-kit';
import { getTownsStart } from 'store/admin/actions';
import mapStyle from './map-style.json';

const Overview = ({ user, towns, getTowns }) => {
  const history = useHistory();

  useEffect(() => {
    getTowns();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMarkers = () => {
    return [
      ...user.drafts.map(draft => {
        return {
          position: {
            lat: draft.town.center.coordinates[1],
            lng: draft.town.center.coordinates[0]
          },
          title: draft.town.name,
          color: draft.isPublished ? 'primary' : 'secondary',
          infoWindow: renderToString(
            <TownCard size="sm" town={draft.town} draft={draft} className="width-200" showLink />
          ),
          onLinkClick: () => handleLinkClicked('draft', draft._id)
        };
      }),
      ...towns
        .filter(town => !user.drafts.map(draft => draft.town._id).includes(town._id))
        .map(town => {
          return {
            position: {
              lat: town.center.coordinates[1],
              lng: town.center.coordinates[0]
            },
            title: town.name,
            color: 'grey',
            infoWindow: renderToString(
              <TownCard size="sm" town={town} className="width-200" showLink />
            ),
            onLinkClick: () => handleLinkClicked('town', town._id)
          };
        })
    ];
  };

  const handleLinkClicked = (type, id) => {
    history.push(type === 'draft' ? `/admin/draft/${id}` : `/admin/town/${id}`);
  };

  const otherTowns =
    towns && user ? towns.filter(t => !user.drafts.map(d => d.town._id).includes(t._id)) : null;

  return (
    <>
      <Map
        height="35vh"
        zoom={3}
        minZoom={3}
        maxZoom={3}
        center={{ lat: 51.5099695, lng: -0.1371599 }}
        styles={mapStyle}
        loading={!(user && towns)}
        markers={user && user.drafts && towns ? getMarkers() : []}
      />
      <div className="container pt-4 pt-md-6 pm-8 mb-6">
        <div className="row">
          <div className="col-12">
            {user && user.drafts ? (
              <>
                <h3 className="right-line mb-4">My drafts ({user.drafts.length})</h3>
                <Carousel
                  elements={user.drafts
                    .filter(d => d.isPublished)
                    .sort((a, b) => a.town.year - b.town.year)
                    .concat(
                      user.drafts
                        .filter(d => !d.isPublished)
                        .sort((a, b) => a.town.year - b.town.year)
                    )
                    .map(draft => (
                      <TownCard
                        town={draft.town}
                        draft={draft}
                        showLink
                        onImageClick={handleLinkClicked}
                      />
                    ))}
                />
              </>
            ) : null}
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            {user && user.drafts && towns ? (
              <>
                <h3 className="right-line mb-4">Other cities ({otherTowns.length})</h3>
                <Carousel
                  elements={otherTowns.map(town => (
                    <TownCard town={town} showLink onImageClick={handleLinkClicked} />
                  ))}
                  infinite
                />
              </>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.admin.loading,
    user: state.admin.user,
    towns: state.admin.towns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTowns: () => dispatch(getTownsStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
