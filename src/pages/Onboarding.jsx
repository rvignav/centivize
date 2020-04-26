import React from 'react';

import { Onboarding, Info, Step, Field, End } from '@reactive-labs/onboarding';
import Container from '../components/onboarding/container.component';
import InputText from '../components/onboarding/input-text/input-text.component';
import Button from '../components/onboarding/button/button.component';
import Progress from '../components/onboarding/progress/progress.component';
import Feedback from '../components/onboarding/feedback.component';
import Header from '../components/onboarding/header.component';
import StepHeader from '../components/onboarding/step-header.component';

import { Redirect } from 'react-router-dom';
import { useFirstTime } from '../hooks/auth';

function OnboardingSwiper() {
  // redirect if not first time
  const [firstTime, loadingFirstTime] = useFirstTime();

  if (!loadingFirstTime && !firstTime) {
    return <Redirect to="/app" />;
  }

  // if first time, onboarding
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
                  title={`Welcome, John Doe!`}
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
                  on: 'blur',
                  validator: (value) => value !== '',
                  errorMessage: 'Username cannot be empty',
                },
                {
                  name: 'minimum-characters',
                  on: 'blur',
                  validator: (value) => value.length > 2,
                  errorMessage: `Must be at least 3 characters`,
                },
                {
                  name: 'available-username',
                  on: 'blur',
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
                  on: 'blur',
                  validator: (value) => value !== '',
                  errorMessage: 'Username cannot be empty',
                },
                {
                  name: 'is-number',
                  on: 'blur',
                  validator: (value) => !isNaN(value),
                  errorMessage: `Age must be a number`,
                },
                {
                  name: 'valid-age',
                  on: 'blur',
                  validator: (value) =>
                    value == '' || (value > 0 && value < 130),
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
            <Button onClick={nextStep}>Next Step</Button>
          </Container>
        )}
      </Step>
      <Step name="aditional-details">
        {({ validStep, finish }) => (
          <Container>
            <StepHeader>Finish</StepHeader>
            <Field
              name="text"
              type="text"
              validations={[
                {
                  name: 'is-email',
                  on: 'blur',
                  errorMessage: 'You have to write a valid email',
                },
                {
                  name: 'on-enter',
                  on: 'enter',
                  validations: ['is-email'],
                },
              ]}
            >
              {({ type, value, onChange, onBlur, onEnter, valid, error }) => (
                <InputText
                  type={type}
                  placeholder="Email"
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                  onEnter={() => onEnter(finish)}
                  valid={valid}
                  error={error}
                />
              )}
            </Field>
            <Button
              disabled={!validStep}
              onClick={validStep ? finish : () => console.log("FINISHED")}
            >
              Complete!
            </Button>
          </Container>
        )}
      </Step>
      <End>
        {({ full_name }) => (
          <Container>
            <Feedback
              title={`Hello, ${full_name.name}! 👋`}
              subtitle="It's good to know that you're interested in subscribing to our newsletter!"
            />
          </Container>
        )}
      </End>
    </Onboarding>
  );
}

export default OnboardingSwiper;
