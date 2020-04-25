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
  signInFlow: 'redirect',
  // Redirect to /signedIn after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
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
  width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  border-radius: 8px;
`;

const SignInTitle = styled.h2`
  font-weight: normal;
  font-size: 14px;
  padding: 0 0 0 40px;
  margin-top: 15px;
`;

const AuthCard = () => (
  <AuthCardStyles>
    <SignInTitle>Sign in with one of the following:</SignInTitle>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
  </AuthCardStyles>
);

export default AuthCard;
