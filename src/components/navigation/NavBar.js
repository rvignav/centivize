import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import $ from "jquery";

import NavBarItem from "./NavBarItem";

export default function NavBar() {
  const path = useLocation().pathname; // to determine which is active

  useEffect(() => {
    // clicking outside the navbar closes it
    $(document).ready(() => {
      $(document).click(function (event) {
        var click = $(event.target);
        var _open = $(".navbar-collapse").hasClass("show");
        if (_open === true && !click.hasClass("navbar-toggler")) {
          $(".navbar-toggler").click();
        }
      });
    });
  });

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <div className="container">
        {/* Logo */}
        <Link to="/">
          {/* <img
            src={require("../../assets/img/logo.png")}
            alt=""
            id="navlogoimg"
          /> */}
          <h1 className="navbar-brand" id="navlogotext">
            Centivize
          </h1>
        </Link>

        {/* Hamburger Menu for collapse */}
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* <span className="navbar-toggler-icon"></span> */}
          <span className="icon-bar top-bar"></span>
          <span className="icon-bar middle-bar"></span>
          <span className="icon-bar bottom-bar"></span>
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarColor01">
          <div className="navbar-nav ml-auto">
            <NavBarItem title="Home" active={path === "/"} to="/" />
            <NavBarItem
              title="Diagnosis"
              active={path.startsWith("/diagnosis")}
              to="/diagnosis"
            />
            <NavBarItem
              title="Contact"
              active={path === "/contact"}
              to="/contact"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
