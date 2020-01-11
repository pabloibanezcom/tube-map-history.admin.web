import React from 'react';
import { connect } from 'react-redux';
import { Form, LayoutWrapper } from 'react-tube-kit';
import * as actions from 'store/auth/actions';
import loginFormData from './login.form.json';

const Login = ({ loading, login }) => (
  <LayoutWrapper
    loading={loading}
    headerTitle="Tube map history"
    sideNavbarEnabled={false}
    bottomMenuEnabled={false}
    headerTitleDisplay="xs-"
  >
    <div className="container pt-8 pm-8">
      <div className="row">
        <div className="col-12">
          <h2 className="right-line mb-8">Login</h2>
          <div className="row">
            <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
              <Form
                fields={loginFormData}
                submitText="Login"
                submitBtnProps={{ block: true }}
                onSubmit={login}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </LayoutWrapper>
);

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: formData => dispatch(actions.loginStart(formData.email, formData.password))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
