import React, { Component } from 'react'

import SearchInfo from "../components/SearchInfo"

export class Search extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <SearchInfo />
                </div>
            </div>
        )
    }
}

export default Search
