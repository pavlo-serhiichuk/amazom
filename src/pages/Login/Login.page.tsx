import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm.component'
import { AuthWrapper as Wrapper } from '../pages.style';

const Login = () => {
  return (
    <Wrapper>
      <h3>Login your account:</h3>
      <LoginForm />
    </Wrapper>
  );
};

export default Login;