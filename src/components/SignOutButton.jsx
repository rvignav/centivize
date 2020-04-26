import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useHistory, Redirect } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

const SignOutButton = () => {
  const [authState, setAuthState] = useState('signed in');

  const signOut = async () => {
    setAuthState(true);
    await auth.signOut();
    setAuthState('signed out');
  };

  if (authState === 'signed out') {
    return <Redirect to="/" />;
  }

  return (
    <Button variant="danger" onClick={signOut} size="lg" disabled={authState}>
      {authState === 'signing out' ? 'Signing out...' : 'Sign out'}
    </Button>
  );
};

export default SignOutButton;
