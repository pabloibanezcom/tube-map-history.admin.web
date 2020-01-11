import React from 'react';
import { Button } from 'react-tube-kit';

const ActionButtons = ({ draft, onEditDraft, onDeleteDraft }) => (
  <div>
    <Button block outline color="secondary" icon="map">
      View draft on map
    </Button>
    <Button block outline color="secondary" icon="publish">
      Request publication
    </Button>
    <Button block outline color="secondary" icon="edit" className="mb-4" onClick={onEditDraft}>
      Edit draft
    </Button>
    <Button block outline color="secondary" icon="upload">
      Import draft
    </Button>
    <Button
      block
      outline
      color="secondary"
      icon="download"
      className="mb-4"
      href={`${process.env.REACT_APP_API_URL}/generation/export/draft/${draft.exportId}`}
    >
      Export draft
    </Button>
    <Button block outline color="danger" icon="delete" onClick={onDeleteDraft}>
      Delete draft
    </Button>
  </div>
);

export default ActionButtons;
