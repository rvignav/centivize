import React, { Component } from 'react';

import { Link } from "react-router-dom";

export class FooterOption extends Component {
  render() {
    return (
      <div className="col">
        <Link to={`/app/${this.props.pageName}`}>
          <button className="h-100 w-100">{this.props.icon}</button>
        </Link>
      </div>
    );
  }
}

export default FooterOption;
