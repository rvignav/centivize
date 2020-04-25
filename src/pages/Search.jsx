import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"
import ListCard from "../components/ListCard"

export class Search extends Component {
    render() {
        let posts = [{
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
        }];

        return (
            <div>
                <div className="container-fluid search-upper">
                    <SearchInfo />
                </div>
                <div className="container-fluid search-lower">
                    <ListCard post={{
                        'id': 2,
                        'title': 'Also need help',
                        'name': 'Jane',
                        'intro': 'I need more help than him'
                    }} />
                </div>
            </div>
        )
    }
}

export default Search
