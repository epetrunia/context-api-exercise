import React, { Component } from 'react';

import { SignInContainer, SignInTitle, ButtonsContainer } from './SignIn.style';

import FormInput from './../FormInput';
import CustomButton from './../CustomButton';
import { signInWithGoogle, auth } from '../../firebase/utils';

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={email}
            label='Email'
            handleChange={this.handleChange}
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            label='Password'
            handleChange={this.handleChange}
          />
          <ButtonsContainer>
            <CustomButton type='submit'>sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              sign in with google
            </CustomButton>
          </ButtonsContainer>
        </form>
      </SignInContainer>
    );
  }
}

export default SignIn;
