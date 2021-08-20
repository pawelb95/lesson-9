import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import { SignUpContainer } from '../../components/sign-up/sign-up.styles';

import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
  <SignUpContainer>
    <SignIn />
    <SignUp />
  </SignUpContainer>
);

export default SignInAndSignUpPage;
