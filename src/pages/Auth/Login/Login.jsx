import { HeaderUserMenu } from 'components';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, LayoutWrapper } from 'react-tube-kit';
import * as actions from 'store/auth/actions';
import loginFormData from './login.form.json';

const Login = ({ errors, loading, login }) => {
  const history = useHistory();

  useEffect(() => {
    localStorage.removeItem('auth');
  }, []);

  const headerRightContent = <HeaderUserMenu />;

  return (
    <LayoutWrapper
      loading={loading}
      headerTitle="Tube map history"
      sideNavbarEnabled={false}
      bottomMenuEnabled={false}
      headerTitleDisplay="xs-"
      headerRightContent={headerRightContent}
    >
      <div className="container pt-8 pm-8">
        <div className="row">
          <div className="col-12">
            <h2 className="right-line mb-8">Login</h2>
            <div className="row">
              <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
                <Form
                  fields={loginFormData}
                  externalErrors={errors}
                  submitText="Login"
                  submitBtnProps={{ block: true }}
                  onSubmit={formData => login(history, formData)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutWrapper>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    errors: state.auth.errors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (history, formData) =>
      dispatch(actions.loginStart(history, formData.email, formData.password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
