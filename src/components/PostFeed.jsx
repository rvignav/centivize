import React, { Component } from 'react'

import ListCard from "./ListCard"

export class PostFeed extends Component {
    render() {
        const postElements = this.props.posts.map(post => {
            return <ListCard post={post} />
        })

        return (
            <div>
                {postElements}
            </div>
        )
    }
}

export default PostFeed
