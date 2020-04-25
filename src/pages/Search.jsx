import React, { Component } from 'react'

import Header from "../components/Header"

export class Search extends Component {
    render() {
        return ( 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <form className="form-inline pt-3">
                            <div className="flex-fill mr-2">
                                <input type="search" name="" className="form-control w-100" placeholder="Search..." id=""/>
                            </div>
                            <button className="btn btn-primary">Map</button>
                        </form>
                    </div>
                </div>
            </div>
            // <div className="container-fluid">
            //     <div className="row pt-3">
            //         <div className="col">
            //             <form>
            //                 <input type="text" className="form-control" placeholder="Search..." />
            //             </form>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default Search
