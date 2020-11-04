import React from 'react';
import renderField from './Form/renderField';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../actions';
import { compose } from 'redux';
import { connect, useSelector } from 'react-redux';
import validate from './Form/validation';

const Signup = (props) => {
  const error = useSelector((state) => state.auth.errorMessage);

  const { handleSubmit, submitting } = props;

  const onSubmit = (value) => {
    props.signup(value, () => {
      props.history.push('/');
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          name="email"
          type="email"
          component={renderField}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        <Field
          name="confirmPassword"
          type="password"
          component={renderField}
          label="Confirm Password"
        />
        <div>
          <div className="form-group">
            {error ? <span className="text-danger">{error}</span> : ''}
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={submitting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default compose(
  connect(null, actions),
  reduxForm({ form: 'SignUpForm', validate })
)(Signup);
