import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-tube-kit';
import { getTownsStart } from 'store/admin/actions';

const Overview = ({ user }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h2 className="right-line mb-8">Admin</h2>
        <ul>
          {user
            ? user.drafts.map(draft => (
                // eslint-disable-next-line react/jsx-indent
                <li key={draft._id}>
                  <Button type="link" to={`/admin/draft/${draft._id}`}>
                    {draft.name}
                  </Button>
                </li>
              ))
            : null}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.admin.loading,
    user: state.admin.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTowns: () => dispatch(getTownsStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Overview);
