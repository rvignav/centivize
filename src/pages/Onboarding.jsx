import React from 'react';
import { Redirect } from 'react-router-dom';

import { useFirstTime } from '../hooks/auth';

const Onboarding = () => {
  const [firstTime, loadingFirstTime] = useFirstTime();

  if (!loadingFirstTime && !firstTime) {
    return <Redirect to="/app" />;
  }

  return <div />;
};

export default Onboarding;
