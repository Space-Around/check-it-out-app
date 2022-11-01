import React from 'react';

import TabNavigator from './MainTabNavigator';
import AuthView from '../auth/AuthView';
import SignUpView from '../auth/SignUpView';
import SignInView from '../auth/SignInView';
import PlanView from '../plan/PlanView';


const StackNavigationData = [
  {
    name: 'React Native Starter',
    component: TabNavigator,
  },
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
  {
    name: 'Plan',
    component: PlanView,
  },
]

export default StackNavigationData;