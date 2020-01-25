import React from 'react';
import { connect } from 'react-redux';
import { Form, LayoutWrapper } from 'react-tube-kit';
import registerFormData from './register.form.json';

const Register = ({ loading, login }) => (
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
          <h2 className="right-line mb-8">Register</h2>
          <div className="row">
            <div className="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
              <Form
                fields={registerFormData}
                submitText="Register"
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

const mapDispatchToProps = () => {
  return {
    // register: formData => dispatch(actions.registerStart(formData.email, formData.password))
    register: formData => console.log(formData)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
