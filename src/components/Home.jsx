import React, { Component } from 'react';

import Header from './Header';
import PostFeed from './PostFeed';

import dummyData from '../DUMMY';
import { db } from '../firebase/firebase.utils.js';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

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
        const posts = dummyData;

        return (
            <div>
                <Header />
                <div className="container-fluid home-main">
                    <PostFeed posts={posts} />
                </div>
            </div>
        );
    }
}

export default Home;
