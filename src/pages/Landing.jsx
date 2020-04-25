import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

const Landing = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Redirect to="/app" />;
  }
  return <div />;
};

export default Landing;
