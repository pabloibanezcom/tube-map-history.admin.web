/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Button, CollapsibleList, LoadingSpinner, Pagination } from 'react-tube-kit';
import { searchParamsChangeStart, startAction } from 'store/admin/actions';
import ConnectionContent from './connection-content/connection-content';
import ConnectionFilter from './connection-filter/connection-filter';
import ConnectionHeader from './connection-header/connection-header';
import LineContent from './line-content/line-content';
import LineHeader from './line-header/line-header';
import StationContent from './station-content/station-content';
import StationFilter from './station-filter/station-filter';
import StationHeader from './station-header/station-header';

const getHeaderOrContent = (elementType, isHeader) => {
  switch (elementType) {
    case 'line':
      return isHeader ? LineHeader : LineContent;
    case 'station':
      return isHeader ? StationHeader : StationContent;
    case 'connection':
      return isHeader ? ConnectionHeader : ConnectionContent;
    default:
      return null;
  }
};

const ElementsTab = ({
  draft,
  elementsType,
  elements,
  searchParams,
  pagination,
  searchElements,
  loadingElements,
  _startAction
}) => {
  useEffect(() => {
    search();
  }, []);

  const search = page => {
    const _pagination = page ? { ...pagination, page } : pagination;
    searchElements(searchParams, _pagination, elementsType);
  };

  const noElementsBox = () => {
    return !draft[`${elementsType}sAmount`] ? (
      <div className="py-6 border rounded">
        <div className="d-flex justify-content-center">
          <span className="font-weight-normal">
            This draft doesn&apos;t have any {elementsType} yet. Create the first one now.{' '}
          </span>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button
            outline
            icon="add"
            onClick={() =>
              _startAction(`Add${elementsType.charAt(0).toUpperCase() + elementsType.slice(1)}`)
            }
          >
            Add {elementsType}
          </Button>
        </div>
      </div>
    ) : null;
  };

  const filter = () => {
    switch (elementsType) {
      case 'station':
        return (
          <StationFilter
            draft={draft}
            onSubmit={formData => {
              searchElements(
                {
                  ...searchParams,
                  filter: {
                    ...searchParams.filter,
                    line: formData.line,
                    name: formData.stationName
                  }
                },
                null,
                elementsType
              );
            }}
          />
        );
      case 'connection':
        return (
          <ConnectionFilter
            draft={draft}
            onSubmit={formData => {
              searchElements(
                {
                  ...searchParams,
                  filter: {
                    ...searchParams.filter,
                    line: formData.line,
                    station: formData.station
                  }
                },
                null,
                elementsType
              );
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="position-relative">
      <LoadingSpinner loading={loadingElements} />
      {noElementsBox() || (
        <>
          <div className="d-flex flex-row justify-content-between mb-4">
            {draft ? <div>{filter()}</div> : null}
            <div>
              <Button
                outline
                icon="add"
                size="sm"
                onClick={() =>
                  _startAction(`Add${elementsType.charAt(0).toUpperCase() + elementsType.slice(1)}`)
                }
              >
                Add {elementsType}
              </Button>
            </div>
          </div>
          <CollapsibleList
            elements={elements}
            header={getHeaderOrContent(elementsType, true)}
            content={getHeaderOrContent(elementsType)}
            bindings={{ _startAction }}
          />
          <Pagination color="secondary" pagination={pagination} size="sm" onPageChange={search} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    draft: state.admin.draft,
    elementsType: state.admin.elementsType,
    elements: state.admin.elements,
    searchParams: state.admin.searchParams,
    pagination: state.admin.pagination,
    loadingElements: state.admin.loadingElements
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    searchElements: (searchParams, pagination, elementType) =>
      dispatch(searchParamsChangeStart(searchParams, pagination, elementType))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsTab);
