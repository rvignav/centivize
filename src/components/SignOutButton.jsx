import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import { useHistory } from 'react-router-dom';
import { auth } from '../firebase/firebase.utils';

const SignOutButton = () => {
  const [isSigningOut, setIsSigningOut] = useState(false);
  const history = useHistory();

  const signOut = async () => {
    setIsSigningOut(true);
    await auth.signOut();
    const landing = '/';
    history.push(landing);
  };

  return (
    <Button
      variant="danger"
      onClick={signOut}
      size="lg"
      disabled={isSigningOut}
    >
      {isSigningOut ? 'Signing out...' : 'Sign out'}
    </Button>
  );
};

export default SignOutButton;
