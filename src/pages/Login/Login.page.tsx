import React from 'react';
import LoginFormComponent from '../../components/LoginForm/LoginForm.component'
import { LoginWrapper as Wrapper } from '../pages.style';

const Login = () => {
  return (
    <Wrapper>
      <LoginFormComponent />
    </Wrapper>
  );
};

export default Login;