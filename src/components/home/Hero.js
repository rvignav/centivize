import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="container-fluid text-center text-md-left pt-0 pt-md-5 w-100">
      <div className="container">
        <h1>Centivize Telemedicine</h1>
        <h2 id="slogan">
          <span className="text-primary">Smart Telemedicine </span>
          <span className="text-white">for the individual patient.</span>
        </h2>
        {/* <!-- three buttons (all .btn-get-started, but primary button has .main-action) -->*/}
        <div className="mt-3">
          <Link
            className="btn mr-0 mb-1 mr-md-2 mt-2 mt-md-0 btn-primary btn-get-started"
            to="/diagnosis"
          >
            Get Started
          </Link>
          <br className="d-block d-md-none" />{" "}
          <a
            href="https://centivize.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-0 mb-1 mr-md-2 mt-2 mt-md-0 btn btn-secondary btn-get-started"
          >
            Centivize&nbsp;&nbsp;<i className="fa fa-external-link-square"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
