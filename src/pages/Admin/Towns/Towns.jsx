/* eslint-disable no-unneeded-ternary */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button, CollapsibleList, LoadingSpinner, Map, Pagination, Panel } from 'react-tube-kit';
import { finishAction, searchParamsChangeStart, startAction } from 'store/admin/actions';
import ActionsPanel from '../Draft/actions-panel/actions-panel';
import TownContent from '../Draft/elements-tab/town-content/town-content';
import TownFilter from '../Draft/elements-tab/town-filter/town-filter';
import TownHeader from '../Draft/elements-tab/town-header/town-header';
import mapStyle from './map-style.json';

const Towns = ({
  action,
  actionObj,
  elements,
  searchParams,
  pagination,
  _startAction,
  _finishAction,
  searchTowns
}) => {
  const [selectedTown, setSelectedTown] = useState(null);

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const search = page => {
    const _pagination = page ? { ...pagination, page } : pagination;
    searchTowns(searchParams, _pagination);
  };

  const handleSubmit = (actionName, formData) => {
    // eslint-disable-next-line prefer-object-spread
    const newValue = Object.assign({}, actionObj, formData);
    if (actionName === 'AddTown') {
      console.log(newValue);
      // addLine(newValue);
    }
    if (actionName === 'EditTown') {
      console.log(newValue);
      // editLine(newValue);
    }
  };

  const getTownMarker = town => {
    return {
      position: {
        lat: town.center.coordinates[1],
        lng: town.center.coordinates[0]
      },
      title: town.name,
      color: 'primary'
    };
  };

  return (
    <div className="container pt-4 pt-md-8 pm-8">
      <>
        <div className="row mb-4 mb-md-8">
          <div className="col-12">
            <h2 className="right-line mb-2">Towns</h2>
            <h5>Admin all towns here</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <Map
              className="rounded"
              height="260px"
              zoom={3}
              minZoom={3}
              maxZoom={3}
              center={{ lat: 51.5099695, lng: -0.1371599 }}
              dynamicCenter
              styles={mapStyle}
              markers={selectedTown ? [getTownMarker(selectedTown)] : null}
            />
            {selectedTown ? (
              <div className="mt-4">
                <a>
                  <img
                    className="rounded w-100"
                    src={selectedTown.imgCard}
                    alt={`${selectedTown.name}_imgCard`}
                  />
                </a>
                <div className="d-flex justify-content-center mt-4 rounded border p-4">
                  <img
                    src={selectedTown.logo}
                    style={{ height: 64 }}
                    alt={`${selectedTown.name}_logo`}
                  />
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`col-6 animated ${
              !action ? 'fadeIn animation-none-md' : 'fadeOut animation-none-md'
            } animated-3x`}
          >
            <div className="position-relative">
              <LoadingSpinner
                noSpinner
                loading={action ? true : false}
                className="d-none d-md-block"
              />
              {elements ? (
                <Panel headerColor="secondary" headerText="Towns" headerIcon="town">
                  <div className="d-flex flex-row justify-content-between mb-4">
                    <div>
                      <TownFilter
                        countries={elements.map(el => el.country)}
                        onSubmit={formData => {
                          searchTowns(
                            {
                              ...searchParams,
                              filter: {
                                ...searchParams.filter,
                                line: formData.country,
                                name: formData.townName
                              }
                            },
                            null
                          );
                        }}
                      />
                    </div>
                    <div>
                      <Button outline icon="add" size="sm" onClick={() => _startAction('AddTown')}>
                        Add town
                      </Button>
                    </div>
                  </div>
                  <CollapsibleList
                    elements={elements}
                    header={TownHeader}
                    content={TownContent}
                    bindings={{ _startAction }}
                    onElementSelected={setSelectedTown}
                  />
                  <Pagination
                    color="secondary"
                    pagination={pagination}
                    size="sm"
                    onPageChange={search}
                  />
                </Panel>
              ) : null}
            </div>
          </div>
          <div
            className={`col-lg-3 position-absolute position-md-relative animated ${
              action ? 'slideInRight zoomIn-md' : 'slideOutRight zoomOut-md'
            } animated-3x`}
          >
            {action ? (
              <ActionsPanel
                actionName={action}
                value={actionObj}
                onSubmit={formData => handleSubmit(action, formData)}
                onCancel={_finishAction}
              />
            ) : null}
          </div>
        </div>
      </>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    action: state.admin.action,
    actionObj: state.admin.actionObj,
    elements: state.admin.elements,
    searchParams: state.admin.searchParams,
    pagination: state.admin.pagination
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    searchTowns: (searchParams, pagination) =>
      dispatch(searchParamsChangeStart(searchParams, pagination, 'town'))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Towns);
