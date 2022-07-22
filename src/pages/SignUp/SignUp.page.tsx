import React from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm.component'
import { AuthWrapper as Wrapper } from '../pages.style';

const SignUp = () => {
  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUp;