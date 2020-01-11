/* eslint-disable no-unneeded-ternary */
import TownCard from 'components/town-card/town-card';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { LoadingSpinner, TabMenu } from 'react-tube-kit';
import {
  changeElementsType,
  deleteDraftStart,
  finishAction,
  getDraftStart,
  startAction,
  updateDraftStart
} from 'store/admin/actions';
import ActionButtons from './action-buttons/action-buttons';
import ActionsPanel from './actions-panel/actions-panel';
import ElementsTab from './elements-tab/elements-tab';
import tabs from './tabs.json';

const Draft = ({
  match: { params },
  action,
  actionObj,
  draft,
  getDraft,
  changeTab,
  deleteDraft,
  editDraft,
  _startAction,
  _finishAction
}) => {
  useEffect(() => {
    if (params.draftId) {
      getDraft(params.draftId);
    }
  }, [getDraft, params.draftId]);

  const handleSubmit = (actionName, formData) => {
    // eslint-disable-next-line prefer-object-spread
    const newValue = Object.assign({}, actionObj, formData);
    if (actionName === 'DeleteDraft') {
      deleteDraft(draft._id);
    }
    if (actionName === 'EditDraft') {
      editDraft(newValue);
    }
  };

  return (
    <div>
      {draft ? (
        <>
          <div className="row mb-4 mb-md-8">
            <div className="col-12">
              <h2 className="right-line mb-2">{draft.name}</h2>
              <h5>{draft.description}</h5>
            </div>
          </div>
          <div className="row">
            <div
              className={`col-lg-3 animated ${
                !action ? 'fadeIn animation-none-md' : 'fadeOut animation-none-md'
              } animated-3x`}
            >
              <div className="position-relative">
                <LoadingSpinner
                  noSpinner
                  loading={action ? true : false}
                  className="d-none d-md-block"
                />
                <TownCard draft={draft} town={draft.town} className="mb-8" />
                <ActionButtons
                  draft={draft}
                  onEditDraft={() => _startAction('EditDraft', draft)}
                  onDeleteDraft={() => _startAction('DeleteDraft', draft)}
                />
              </div>
            </div>
            <div
              className={`col-lg-6 animated ${
                !action ? 'fadeIn animation-none-md' : 'fadeOut animation-none-md'
              } animated-3x`}
            >
              <div className="position-relative">
                <LoadingSpinner
                  noSpinner
                  loading={action ? true : false}
                  className="d-none d-md-block"
                />
                <TabMenu
                  color="secondary"
                  tabs={tabs}
                  content={ElementsTab}
                  onTabChange={tabIndex => changeTab(tabs[tabIndex].id)}
                />
              </div>
            </div>
            <div
              className={`col-lg-3 position-absolute position-md-relative animated ${
                action ? 'slideInRight zoomIn-md' : 'slideOutRight zoomOut-md'
              } animated-3x`}
            >
              {action ? (
                <ActionsPanel
                  draft={draft}
                  actionName={action}
                  value={actionObj}
                  onSubmit={formData => handleSubmit(action, formData)}
                  onCancel={_finishAction}
                />
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    action: state.admin.action,
    actionObj: state.admin.actionObj,
    draft: state.admin.draft
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    changeTab: elementsType => dispatch(changeElementsType(elementsType)),
    getDraft: draftId => dispatch(getDraftStart(draftId)),
    deleteDraft: draftId => dispatch(deleteDraftStart(draftId)),
    editDraft: draft => dispatch(updateDraftStart(draft))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Draft);
