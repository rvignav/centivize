import React from 'react';
import { useLocation } from 'react-router-dom'
import { FaHome, FaSearch, FaPlusCircle, FaListAlt } from 'react-icons/fa';

import FooterOption from './FooterOption';

export default function Footer() {
  let path = useLocation().pathname
  console.log(path)

  return (
    <div className="container-fluid fixed-bottom p-0">
      <footer className="row no-gutters">
        <FooterOption current={path == "/app/home"} pageName="home" icon={<FaHome />} />
        <FooterOption current={path == "/app/search"} pageName="search" icon={<FaSearch />} />
        <FooterOption current={path == "/app/post"} pageName="post" icon={<FaPlusCircle />} />
        <FooterOption current={path == "/app/profile"} pageName="profile" icon={<FaListAlt />} />
      </footer>
    </div>
  )
}

