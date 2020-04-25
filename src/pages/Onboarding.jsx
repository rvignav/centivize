import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebase.utils';

const Onboarding = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Redirect to="/app" />;
  }

  return <div />;
};

export default Onboarding;
