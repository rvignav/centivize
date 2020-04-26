import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

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

const AuthCard = () => (
  <div className="container">
    <div className="card shadow-sm">
      <div className="card-header">
        <h5 className=" text-center mb-1">
          Sign in with one of the following:{' '}
        </h5>
      </div>
      <div className="card-body">
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
      </div>
    </div>
  </div>
);

export default AuthCard;
