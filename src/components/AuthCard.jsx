import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import styled from 'styled-components';

import {
  auth,
  googleProvider,
  facebookProvider,
  emailProvider,
} from '../firebase/firebase.utils';

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/app',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    googleProvider.providerId,
    facebookProvider.providerId,
    emailProvider.providerId,
  ],
};

const AuthCardStyles = styled.div`
  box-shadow: 0 5px 5px 0 rgba(154, 160, 185, 0.05),
    0 5px 30px 0 rgba(166, 173, 201, 0.22);
  width: 30rem;
  margin: 0 auto;
  padding: 2rem 0;
  border-radius: 0.8rem;
`;

const SignInTitle = styled.h2`
  font-weight: normal;
  font-size: 1.4rem;
  padding: 0 0 0 4rem;
  margin-top: 1.5rem;
`;

const AuthCard = () => (
  <AuthCardStyles>
    <SignInTitle>Sign in with one of the following:</SignInTitle>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  </AuthCardStyles>
);

export default AuthCard;
