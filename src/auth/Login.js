import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { submitLogin } from './auth.action';

const Login = ({ auth, onSubmit }) => {
  let emailInput;
  let passwordInput;

  const login = e => {
    e.preventDefault();
    onSubmit({
      email: emailInput.value,
      password: passwordInput.value,
    });
  };

  if (auth.isAuthenticated) {
    return (<Redirect to="/private" />)
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={login}>
        <h2>Sign In</h2>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email" type="email" required
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
          Don't have an account? <Link to="/signup">Register</Link>
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  onSubmit: React.PropTypes.func,
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

const LoginPage = connect(mapStateToProps, { onSubmit: submitLogin })(Login);

export { Login, LoginPage as default };
