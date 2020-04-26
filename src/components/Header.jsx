import React, { Component } from 'react'
import logo from "../assets/centivizeit2.png"

export class Header extends Component {
    render() {
        return (
            <header className="fixed-top logo-header text-center">
                <img src={logo} className="img-fluid col-md-2 col-sm-3 col-4 col-lg-1 pb-xl-2 pt-xl-2" />
            </header>
        )
    }
}

export default Header
