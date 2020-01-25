import { HeaderUserMenu } from 'components';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import { LayoutWrapper } from 'react-tube-kit';
import { getOwnUserStart } from 'store/admin/actions';
import routes from './routes';

const Admin = ({ match, loading, user, getUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      history.push('/login');
    } else if (!user) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const headerRightContent = <HeaderUserMenu user={user} />;

  return (
    <LayoutWrapper
      loading={loading}
      headerTitle="Tube map history"
      sideNavbarEnabled={false}
      bottomMenuEnabled={false}
      headerTitleDisplay="xs-"
      headerRightContent={headerRightContent}
    >
      {user ? routes(match.path, user) : null}
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
