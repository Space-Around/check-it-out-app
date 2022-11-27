import React from 'react';

import AuthView from '../auth/AuthView';
import SignUpView from '../auth/SignUpView';
import SignInView from '../auth/SignInView';


const StackAuthNavigationData = [
  {
    name: 'Auth',
    component: AuthView,
  },
  {
    name: 'SignIn',
    component: SignInView,
  },
  {
    name: 'SignUp',
    component: SignUpView,
  },
]

export default StackAuthNavigationData;