import React, { Component } from 'react'

import SearchBar from "./SearchBar"


export class SearchInfo extends Component {
    toggleSetting(setting) {
        console.log(setting)
    }
    render() {
        let sortBy = this.props.sort;
        let dateNames = "btn mr-1 "
        dateNames += sortBy == "date" ? "btn-primary" : "btn-outline-primary"
        let distanceNames = "btn mr-1 "
        distanceNames +=  sortBy == "distance" ? "btn-primary" : "btn-outline-primary"
        let popularityNames = "btn "
        popularityNames += sortBy == "popularity" ? "btn-primary" : "btn-outline-primary"

        return (
            <div>
                <SearchBar />
                <div className="row text-center">
                    <div className="col-md-12 pt-2">
                        <b className="mr-1">Sort by: </b>
                        <button className={dateNames} onClick={() => this.props.toggleSetting("date")}>Newest</button>
                        <button className={distanceNames} onClick={() => this.props.toggleSetting("distance")}>Closest</button>
                        <button className={popularityNames} onClick={() => this.props.toggleSetting("popularity")}>Most Popular</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchInfo
