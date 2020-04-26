import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router-dom';

import WelcomeHeader from '../components/auth/WelcomeHeader';
import AuthCard from '../components/auth/AuthCard';
import { auth } from '../firebase/firebase.utils';

// import '../css/index.css';

const Auth = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Redirect to="/app" />;
  }

  return (
    <>
      <WelcomeHeader />
      <AuthCard />
    </>
  );
};

export default Auth;
