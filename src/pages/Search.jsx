import React, { Component } from 'react'

import Header from "../components/Header"

export class Search extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row pt-3">
                    <div className="col">
                        <form>
                            <input type="text" className="form-control" placeholder="Search..." />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search
