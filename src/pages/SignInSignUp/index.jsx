import React from 'react';
import { SignInSignUpContainer } from './SignInSignUp.style';
import SignUp from '../../components/SignUp';
import SignIn from './../../components/SignIn';

function SignInSignUp() {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
}

export default SignInSignUp;
