import React, { useCallback, useContext } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { useToasts } from 'react-toast-notifications';
import authentication from '../../services/base';
import { AuthContext } from '../../hooks/auth';
import Button from '../../components/Button';
import {
  Container,
  FormContainer,
  InputBlock,
  ButtonContainer,
} from './styles';

const SignIn = ({ history }) => {
  const { addToast } = useToasts();

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
        addToast('Wrong Login Info!', {
          appearance: 'error',
          autoDismiss: true,
        });
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <h1>Log in</h1>
      <FormContainer>
        <form onSubmit={handleLogin}>
          <InputBlock>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" />
          </InputBlock>
          <InputBlock>
            <label>Password</label>
            <input type="password" name="password" placeholder="Password" />
          </InputBlock>
          <ButtonContainer>
            <Button type="submit">Log In</Button>
          </ButtonContainer>
        </form>
      </FormContainer>
    </Container>
  );
};

export default withRouter(SignIn);
