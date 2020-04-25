import React, { Component } from 'react';
import { FaHome, FaSearch, FaPlusCircle, FaListAlt } from 'react-icons/fa';

import FooterOption from './FooterOption';

export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid fixed-bottom p-0">
        <footer className="row no-gutters">
          <FooterOption pageName="home" icon={<FaHome />} />
          <FooterOption pageName="search" icon={<FaSearch />} />
          <FooterOption pageName="post" icon={<FaPlusCircle />} />
          <FooterOption pageName="profile" icon={<FaListAlt />} />
        </footer>
      </div>
    );
  }
}

export default Footer;
