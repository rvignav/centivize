import React, { Component } from 'react';

import Header from './Header';
import PostFeed from './posts/PostFeed';

import dummyData from '../dummyposts';
import { db } from '../firebase/firebase.utils.js';

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
                    <PostFeed posts={this.state.posts} />
                </div>
            </div>
        );
    }
}

export default Home;
