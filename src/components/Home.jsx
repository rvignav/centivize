import React, { Component } from 'react';

import Header from './Header';
import PostFeed from './PostFeed';

import dummyData from '../dummyposts';
import { db } from '../firebase/firebase.utils.js';
import distance from '../distance.js';

export class Home extends Component {
  constructor(props) {
    super(props);
    let posts = this.loadData();
    this.state = {
      posts: posts,
    };
  }

  loadData = () => {
    return dummyData;
  };

<<<<<<< HEAD
    render() {
        const posts = dummyData;
        distance(40, 90, -70, 120);
        return (
            <div>
                <Header />
                <div className="container-fluid home-main">
                    <PostFeed posts={posts} />
                </div>
            </div>
        );
    }
=======
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      const user = 'test';
      db.collection(user)
        .add({
          latitude,
          longitude,
        })
        .then(function () {
          console.log('DONE');
        });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container home-main">
          <PostFeed posts={this.state.posts} />
        </div>
      </div>
    );
  }
>>>>>>> a80784ebd984533a68b6a6bf26f246825a2ca0aa
}

export default Home;
