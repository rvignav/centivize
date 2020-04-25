import React, { Component } from 'react'

import SearchBar from "./SearchBar"


export class SearchInfo extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <div className="row text-center">
                    <div className="col-md-12 pt-2">
                        <b className="mr-1">Sort by: </b>
                        <button className="btn btn-outline-primary mr-1">Newest</button>
                        <button className="btn btn-outline-primary mr-1">Closest</button>
                        <button className="btn btn-outline-primary">Most Popular</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInfo
