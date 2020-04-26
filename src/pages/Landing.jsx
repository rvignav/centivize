import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { useLoggedIn } from '../hooks/auth';

const Landing = () => {
  const [loggedIn, loadingLoggedIn] = useLoggedIn();

  if (!loadingLoggedIn && loggedIn) {
    return <Redirect to="/app" />;
  }

  return (
    <>
      <div className="mb-2">
        <Link to="/signup">
          <Button variant="primary" size="lg">
            Get started
          </Button>{' '}
        </Link>
        <Link to="/signin">
          <Button variant="secondary" size="lg">
            Sign in
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Landing;
