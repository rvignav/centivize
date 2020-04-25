import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import PostFeed from "../components/PostFeed"

import dummyData from "../DUMMY"

export class Search extends Component {
    render() {
        const posts = dummyData;


        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo />
                </div>
                <div className="container-fluid search-lower">
                    <PostFeed posts={posts} />
                </div>
            </div>
        )
    }
}

export default Search
