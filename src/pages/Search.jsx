import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import ListCard from "../components/ListCard"

export class Search extends Component {
    render() {
        const posts = [{
            'id': 1,
            'title': 'Need help',
            'name': 'John Doe',
            'intro': 'Short description'
        },
        {
            'id': 2,
            'title': 'Also need help',
            'name': 'Jane',
            'intro': 'I need more help than him'
        }, 
        {
            'id': 3,
            'title': 'Give me potatoes',
            'name': 'Dr. Chu',
            'intro': 'Please'
        }];

        const postElements = posts.map(post => {
            return <ListCard post={post} />
        })

        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo />
                </div>
                <div className="container-fluid search-lower">
                    {postElements}
                </div>
            </div>
        )
    }
}

export default Search
