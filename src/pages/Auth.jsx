import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import WelcomeHeader from '../components/WelcomeHeader';
import AuthCard from '../components/AuthCard';
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
