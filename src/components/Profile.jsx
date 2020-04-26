import React, { Component } from 'react';
import SignOutButton from './auth/SignOutButton';

import Header from './Header';

import profilePicture from '../assets/profile-test.jpg';

export class Home extends Component {
  render() {
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
          <p className="email">johndoe1@gmail.com</p>
          <p>Primarily volunteers/helps others. Volunteering interests/skills: food delivery.</p>
          <p className="balance">Current balance: <span className="value">$25.00</span></p>
          <SignOutButton />
        </div>
      </div>
    );
  }
}

export default Home;
