import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { auth } from '../firebase/firebase.utils';

const Landing = () => {
  const [user] = useAuthState(auth);

  if (user) {
    return <Redirect to="/app" />;
  }
  return (
    <>
      <div className="mb-2">
        <Link to="/onboarding">
          <Button variant="primary" size="lg">
            Get started
          </Button>{' '}
        </Link>
        <Link to="/login">
          <Button variant="secondary" size="lg">
            Login
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
