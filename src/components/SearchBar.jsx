import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form className="form-inline pt-3">
                        <div className="flex-fill mr-2">
                            <input type="search" name="" className="form-control w-100" placeholder="Search..." id="textSearchInput" />
                        </div>
                        <button className="btn btn-primary" id="mapListToggle">Map</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBar
