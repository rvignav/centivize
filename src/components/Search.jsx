import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import PostFeed from "../components/PostFeed"

import dummyData from "../DUMMY"

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
        let postList = this.loadPosts()
        var newPostList = postList.filter(post => {
            return post.title == this.state.filterText
        })
        this.setState({ posts: newPostList })
    }

    render() {
        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo sort={this.state.sort} toggleSetting={this.toggleSetting} filterTextUpdate={this.filterTextUpdate} />
                </div>
                <div className="container-fluid search-lower">
                    <PostFeed posts={this.state.posts} />
                </div>
            </div>
        )
    }
}

export default Search
