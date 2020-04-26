import React, { Component } from 'react';

import Header from './Header';
import PostFeed from './posts/PostFeed';

import dummyData from '../dummyposts';

export class Home extends Component {
  constructor(props) {
    super(props);
    const posts = this.loadData();
    this.state = {
      posts,
    };
  }

  loadData = () => {
    return dummyData;
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container home-main">
          <PostFeed recommended={true} posts={this.state.posts} />
        </div>
      </div>
    );
  }
}

export default Home;
