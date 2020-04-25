import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import PostFeed from "../components/PostFeed"

import dummyData from "../DUMMY"

export class Search extends Component {
    constructor() {
        super()
        const posts = dummyData;
        this.state = {
            sort: "date",
            filterText: "",
            posts: posts
        }
    }

    toggleSetting = (setting) => {
        this.setState({ sort: setting })
        console.log("currently sorted by: " + this.state.sort)
    }

    render() {
        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo sort={this.state.sort} toggleSetting={this.toggleSetting} />
                </div>
                <div className="container-fluid search-lower">
                    <PostFeed posts={this.state.posts} />
                </div>
            </div>
        )
    }
}

export default Search
