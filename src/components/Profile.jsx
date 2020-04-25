import React, { Component } from 'react';
import Footer from './Footer';
import SignOutButton from './SignOutButton';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Profile page</h1>
        <SignOutButton />
      </div>
    );
  }
}

export default Home;
