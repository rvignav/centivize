import React, { Component } from 'react'

export class SearchBar extends Component {
    render() {
        return (
            <div className="row">
                <div className="col pt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <form className="form-inline" action="/search" acceptCharset="UTF-8" method="get">
                                    <div className="input-group flex-fill">
                                        <input onChange={e => this.props.filterTextUpdate(e.target.value)} type="search" name="search" id="search" placeholder="Search..." className="form-control" aria-label="Search this site " />
                                        <div className="input-group-append">
                                            <input type="button" name="commit" defaultValue="Search" className="btn btn-primary" data-disable-with="Search" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchBar
