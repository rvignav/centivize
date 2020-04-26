import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import { useLoggedIn } from '../hooks/auth';

import '../css/land.css';

const Landing = () => {
  const [loggedIn, loadingLoggedIn] = useLoggedIn();

  if (!loadingLoggedIn && loggedIn) {
    return <Redirect to="/app" />;
  }

  return (
    <>
      <header className="text-center land pt-5">
        <div className="container-fluid">
          <h1>Communify</h1>
          <h2 className="pb-3">Catch phrase goes here.</h2>
          <Link to="/signup">
            <Button variant="primary mb-2" size="lg">
              Get started
            </Button>
          </Link>
          <br />
          <Link to="/signin">
            <Button variant="secondary" size="lg">
              Sign in
            </Button>
          </Link>
        </div>
      </header>
      <div className="container text-center pt-4 pb-3">
        <h1>Point One</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          ullam?
        </p>
        <h1>More Points</h1>
        <p className="lead">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium,
          consequatur corporis. Corporis consequuntur veritatis sint molestiae
          atque a quae necessitatibus nemo!
        </p>
      </div>
    </>
  );
};

export default Landing;
