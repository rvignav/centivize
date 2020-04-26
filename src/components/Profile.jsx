import React from 'react';
import Radar from 'radar-sdk-js';
import SignOutButton from './auth/SignOutButton';
import { useUid, useUser } from '../hooks/auth.js';

import Header from './Header';

import profilePicture from '../assets/profile-test.jpg';
import { useUserDoc } from '../hooks/firestore';

Radar.initialize('prj_live_pk_9960fa9015ec1c672178a43fa62142afc16b6aed');

const Profile = () => {
  const [uid, loadingUid] = useUid();
  const [user, loadingUser] = useUser();
  const [userDoc, loadingUserDoc] = useUserDoc();

  if (!loadingUid) {
    Radar.setUserId(uid);
  }

  const tags = userDoc?.get('tags')?.join(', ');

  return (
    <div>
      <Header />

      <div className="container text-center home-main profile">
        <div className="row justify-content-center">
          <div className="col">
            <img
              className="img-fluid round"
              src={user?.photoURL}
              alt="profile"
            />
          </div>
        </div>
        <h1>{user?.displayName}</h1>
        <p className="email">{user?.email}</p>
        <p>
          Primarily volunteers/helps others.{' '}
          {tags
            ? `Volunteering interests/skills
          include ${userDoc?.get('tags')?.join(', ')}.`
            : null}
        </p>
        <p className="balance">
          Current balance: <span className="value">$25.00</span>
        </p>
        <SignOutButton />
      </div>
    </div>
  );
};

export default Profile;
