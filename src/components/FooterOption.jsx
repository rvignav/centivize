import React, { Component } from 'react';
import { FaHome, FaSearch, FaPlusCircle, FaListAlt } from 'react-icons/fa';

export class FooterOption extends Component {
  render() {
    return (
      <div className="col">
        <button className="h-100 w-100">{this.props.icon}</button>
      </div>
    );
  }
}

export default FooterOption;
