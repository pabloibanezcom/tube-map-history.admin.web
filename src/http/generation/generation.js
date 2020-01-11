import axios from '../axios';

export default class Generation {
  exportDraftUrl = `${process.env.REACT_APP_API_URL}/generation/export/draft`;

  // Import draft
  static importDraft = (draftId, file) => {
    const fd = new FormData();
    fd.append('File[]', file);

    return axios.post(`/generation/import/draft/${draftId}`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  };
}
