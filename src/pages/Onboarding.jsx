import React from 'react';

import { Onboarding, Info, Step, Field, End } from '@reactive-labs/onboarding';
import { Redirect } from 'react-router-dom';
import Container from '../components/onboarding/container.component';
import InputText from '../components/onboarding/input-text/input-text.component';
import Button from '../components/onboarding/button/button.component';
import Progress from '../components/onboarding/progress/progress.component';
import Feedback from '../components/onboarding/feedback.component';
import Header from '../components/onboarding/header.component';
import StepHeader from '../components/onboarding/step-header.component';
import Checkbox from '../components/onboarding/checkbox.component';
import Textarea from '../components/onboarding/textarea/textarea.component';

import { useUser, useLoggedIn, useUid } from '../hooks/auth';
import { useFirstTime } from '../hooks/firestore';
import { db } from '../firebase/firebase.utils';

function OnboardingSwiper() {
  // redirect if not first time
  const [firstTime, loadingFirstTime] = useFirstTime();
  const [loggedIn, loadingLoggedIn] = useLoggedIn();
  const [user, loadingUser] = useUser();
  const [uid] = useUid();

  if (!loadingLoggedIn && !loggedIn) {
    return <Redirect to="/" />;
  }

  if (!loadingFirstTime && !firstTime) {
    return <Redirect to="/app" />;
  }

  // onboarding
  return (
    <Onboarding>
      <Info>
        {({ currentStep, numberOfSteps, prevStep }) => (
          <>
            <Progress currentStep={currentStep} numberOfSteps={numberOfSteps} />
            <Header back={currentStep > 1 && prevStep} />
          </>
        )}
      </Info>

      <Step name="welcome">
        {({ nextStep }) => (
          <Container>
            <Info>
              {({ onboarding }) => (
                <Feedback
                  title={
                    loadingUser ? 'Welcome!' : `Welcome, ${user.displayName}!`
                  }
                  subtitle="Just a few questions and your account will be good to go!"
                />
              )}
            </Info>
            <Button onClick={nextStep}>Let's go!</Button>
          </Container>
        )}
      </Step>

      <Step name="username">
        {({ nextStep, validStep }) => (
          <Container>
            <StepHeader>Pick a username</StepHeader>
            <Field
              name="username"
              type="text"
              validations={[
                {
                  name: 'not-empty',
                  on: 'change',
                  validator: (value) => value !== '',
                  errorMessage: 'Username cannot be empty',
                },
                {
                  name: 'minimum-characters',
                  on: 'change',
                  validator: (value) => value.length > 2,
                  errorMessage: `Must be at least 3 characters`,
                },
                {
                  name: 'available-username',
                  on: 'change',
                  validator: (value) => true,
                  errorMessage: `Username not available`,
                },
                {
                  name: 'on-enter',
                  on: 'enter',
                  validations: [
                    'not-empty',
                    'minimum-characters',
                    'available-username',
                  ],
                },
              ]}
            >
              {({
                type,
                value,
                onChange,
                onFocus,
                onBlur,
                onEnter,
                valid,
                error,
              }) => (
                <InputText
                  type={type}
                  placeholder="Username"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onEnter={() => onEnter(nextStep)}
                  valid={valid}
                  error={error}
                />
              )}
            </Field>
            <Button disabled={!validStep} onClick={nextStep}>
              Next Step
            </Button>
          </Container>
        )}
      </Step>

      <Step name="age-gender">
        {({ nextStep, validStep }) => (
          <Container>
            <StepHeader>Some more account information:</StepHeader>
            <Field
              name="age"
              type="text"
              validations={[
                {
                  name: 'not-empty',
                  on: 'change',
                  validator: (value) => value !== '',
                  errorMessage: 'Age cannot be empty',
                },
                {
                  name: 'is-number',
                  on: 'change',
                  validator: (value) => !isNaN(value),
                  errorMessage: `Age must be a number`,
                },
                {
                  name: 'valid-age',
                  on: 'change',
                  validator: (value) =>
                    value === '' || (value > 0 && value < 130),
                  errorMessage: `Age is not valid`,
                },
                {
                  name: 'on-enter',
                  on: 'enter',
                  validations: ['not-empty', 'is-number', 'valid-age'],
                },
              ]}
            >
              {({
                type,
                value,
                onChange,
                onFocus,
                onBlur,
                onEnter,
                valid,
                error,
              }) => (
                <InputText
                  type={type}
                  placeholder="Age"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onEnter={() => onEnter(nextStep)}
                  valid={valid}
                  error={error}
                />
              )}
            </Field>
            <Field name="gender" type="text">
              {({
                type,
                value,
                onChange,
                onFocus,
                onBlur,
                onEnter,
                valid,
                error,
              }) => (
                <InputText
                  type={type}
                  placeholder="Gender"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onEnter={() => onEnter(nextStep)}
                  valid={valid}
                  error={error}
                />
              )}
            </Field>
            <Button disabled={!validStep} onClick={nextStep}>
              Next Step
            </Button>
          </Container>
        )}
      </Step>

      <Step name="select">
        {({ validStep, finish }) => (
          <Container>
            <StepHeader>
              What will you primarily be using Centivize It for?
            </StepHeader>
            {/* renders the two checkboxes */}
            <Checkbox />
            {/* text area for volunteering skills, only display if volunteering */}
            <StepHeader>What areas of volunteering are for you?</StepHeader>
            <p>Please entered comma seperated values.</p>
            <Field
              name="tags"
              type="text"
              validations={[
                {
                  name: 'not-empty',
                  on: 'change',
                  validator: (value) => value !== '',
                  errorMessage: 'This cannot be left empty',
                },
                {
                  name: 'includes-comma',
                  on: 'change',
                  validator: (value) => value.includes(','),
                  errorMessage: 'Must be comma seperated format',
                },
                {
                  name: 'on-enter',
                  on: 'enter',
                  validations: ['not-empty'],
                },
              ]}
            >
              {({
                type,
                value,
                onChange,
                onFocus,
                onBlur,
                onEnter,
                valid,
                error,
              }) => (
                <Textarea
                  type={type}
                  placeholder="e.g. food delivery"
                  value={value}
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onEnter={() => onEnter(finish)}
                  valid={valid}
                  error={error}
                />
              )}
            </Field>

            <Button
              disabled={!validStep}
              onClick={validStep ? finish : undefined}
            >
              Complete!
            </Button>
          </Container>
        )}
      </Step>
      <End>
        {(results) => {
          const name = user.displayName;
          const { username } = results.username;
          const tags = results.select.tags
            .split(',')
            .map((item) => item.trim());
          const rating = null;
          const points = 0;
          const location = null;
          db.doc(`users/${uid}`).set({
            name,
            username,
            tags,
            rating,
            points,
            location,
          });
          return <div />;
        }}
      </End>
    </Onboarding>
  );
}

export default OnboardingSwiper;
