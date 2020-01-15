import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, LayoutWrapper } from 'react-tube-kit';
import { getOwnUserStart } from 'store/admin/actions';
import routes from './routes';

const Admin = ({ match, loading, user, getUser }) => {
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [getUser, user]);

  const headerRightContent = (
    <div>
      <Button icon="person" color="transparent" uppercase={false}>
        My account
      </Button>
    </div>
  );

  return (
    <LayoutWrapper
      loading={loading}
      headerTitle="Tube map history"
      sideNavbarEnabled={false}
      bottomMenuEnabled={false}
      headerTitleDisplay="xs-"
      headerRightContent={headerRightContent}
    >
      {routes(match.path)}
    </LayoutWrapper>
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
    getUser: () => dispatch(getOwnUserStart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));
