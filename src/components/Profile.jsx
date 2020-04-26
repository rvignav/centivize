import React, { Component } from 'react';
import SignOutButton from './auth/SignOutButton';
import Radar from 'radar-sdk-js';
import { useUid } from '../hooks/auth.js';

import Header from './Header';

import profilePicture from '../assets/profile-test.jpg';

Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const Profile = () => {
  const uid = useUid()[0];
  console.log(uid);
  Radar.setUserId(uid);
  return (
    <div>
      <Header />

      <div className="container text-center home-main profile">
        <div className="row justify-content-center">
          <div className="col">
            <img
              className="img-fluid round"
              src={profilePicture}
              alt="profile picture"
            />

          </div>
        </div>
        <h1>John Doe</h1>
        <p className="email"></p>
        <p>Primarily volunteers/helps others. Volunteering interests/skills: food delivery.</p>
        <p className="balance">Current balance: <span className="value">$25.00</span></p>
        <SignOutButton />
      </div>
    </div>
  );
}

export default Profile;
