import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { submitSignup } from './auth.action';

const Signup = ({ auth, onSubmit }) => {
  let nameInput;
  let emailInput;
  let passwordInput;

  const signup = (e) => {
    e.preventDefault();
    onSubmit({
      fullName: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    });
  };

  if (auth.isAuthenticated) {
    return (<Redirect to="/private" />)
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={signup}>
        <h2>Account Registration</h2>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            id="fullName" type="text" className="validate" required
            ref={c => { nameInput = c; }}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email" type="email" className="validate" required
            ref={c => { emailInput = c; }}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password" type="password" className="validate" required
            ref={c => { passwordInput = c; }}
          />
        </div>
        <button type="submit">Continue</button>
        <div className="auth__alternative">
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
        <div className="auth__thirdParty">
          <a className="btn googleBtn" href="/auth/google">Sign Up With Google</a>
        </div>
      </form>
    </div>
  );
};

Signup.propTypes = {
  onSubmit: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const SignupPage = connect(mapStateToProps, { onSubmit: submitSignup })(Signup);

export { Signup, SignupPage as default };
