import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import PostFeed from "../components/PostFeed"

import dummyData from "../dummyposts"

export class Search extends Component {
    constructor() {
        super()
        let posts = this.loadPosts()
        this.state = {
            sort: "date",
            filterText: "",
            posts: posts
        }
    }

    loadPosts = () => {
        return dummyData;
    }

    toggleSetting = (setting) => {
        this.setState({ sort: setting })
    }

    filterTextUpdate = text => {
        this.setState({ filterText: text })
        this.sortPosts()
    }

    sortPosts = () => {
        console.log("filtering posts")
    }

    render() {
        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo sort={this.state.sort} toggleSetting={this.toggleSetting} filterTextUpdate={this.filterTextUpdate} />
                </div>
                <div className="container search-lower">
                    <PostFeed posts={this.state.posts} />
                </div>
            </div>
        )
    }
}

export default Search
