import React, { useState } from 'react';
import { Form, Panel } from 'react-tube-kit';
import actions from './actions';
import getComplexField from './getComplexField';

const ActionsPanel = ({ draft, actionName, value, onCancel, onSubmit }) => {
  const [formErrors, setFormErrors] = useState([]);

  const getDynamicIntruction = instructioName => {
    switch (instructioName) {
      case 'deleteDraftInstruction':
        return `To delete the draft <b>${draft.name}</b>, type the name to confirm.`;
      case 'deleteLineInstruction':
        return `To delete the line <b>${value.name}</b>, type the name to confirm.`;
      default:
        return null;
    }
  };

  const handleOnSubmit = evt => {
    if (actionName === 'DeleteDraft') {
      if (evt.deleteName !== draft.name) {
        setFormErrors([
          { name: 'deleteName', type: 'noNameMatch', message: 'Name must be same as draft name' }
        ]);
        return;
      }
    }
    if (actionName === 'DeleteLine') {
      if (evt.deleteName !== value.name) {
        setFormErrors([
          { name: 'deleteName', type: 'noNameMatch', message: 'Name must be same as line name' }
        ]);
        return;
      }
    }
    onSubmit(evt);
  };

  return (
    <Panel headerText={actions[actionName].header} headerColor="secondary">
      {actions[actionName].question ? (
        <h4 className="text-center">{actions[actionName].question}</h4>
      ) : null}
      {actions[actionName].dynamicInstruction ? (
        <p
          className="text-center mt-4"
          dangerouslySetInnerHTML={{
            __html: getDynamicIntruction(actions[actionName].dynamicInstruction)
          }}
        />
      ) : null}
      <Form
        fields={actions[actionName].fields.map(field =>
          getComplexField(draft._id, field, draft.lines)
        )}
        value={value}
        externalErrors={formErrors}
        onCancel={onCancel}
        onSubmit={handleOnSubmit}
      />
    </Panel>
  );
};

export default ActionsPanel;
