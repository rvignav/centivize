import React from 'react';
import { Redirect } from 'react-router-dom';

import { useFirstTime } from '../hooks/auth';

import { Onboarding, Step } from '@reactive-labs/onboarding';

const OnboardingSwiper = () => {
  const [firstTime, loadingFirstTime] = useFirstTime();

  if (!loadingFirstTime && !firstTime) {
    return <Redirect to="/app" />;
  }

  return (
    <Onboarding>
      <Step name="welcome">
        
      </Step>
    </Onboarding>
  );
};

export default OnboardingSwiper;
