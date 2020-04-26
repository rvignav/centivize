import React, { Component } from 'react'

import Header from "./Header"
import PostFeed from "./PostFeed"

import dummyData from "../DUMMY"

export class Home extends Component {
    render() {
        const posts = dummyData;

        return (
            <div>
                <Header />
                <div className="container-fluid home-main">
                    <PostFeed posts={posts} />
                </div>
            </div>
        )
    }
}

export default Home
