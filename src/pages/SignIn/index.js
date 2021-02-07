import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import authentication from '../../services/base';
import { AuthContext } from '../../hooks/auth';
import {} from './styles';

const SignIn = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await authentication
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/dashboard');
      } catch (err) {
        console.log(err);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div>
      <h1>Log in</h1>
      <form onSubmit={handleLogin}>
        <label>
          Email
          <input type="email" name="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input type="password" name="password" placeholder="Password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default withRouter(SignIn);
