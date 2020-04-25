import React, { Component } from 'react';
import { FaHome, FaSearch, FaPlusCircle, FaListAlt } from 'react-icons/fa';

import FooterOption from './FooterOption';

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid fixed-bottom p-0">
        <footer className="row no-gutters">
          <FooterOption icon={<FaHome />} />
          <FooterOption icon={<FaSearch />} />
          <FooterOption icon={<FaPlusCircle />} />
          <FooterOption icon={<FaListAlt />} />
        </footer>
      </div>
    );
  }
}

export default Footer;
