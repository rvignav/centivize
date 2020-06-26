import React from "react";
import { Link } from "react-router-dom";

export default function NavBarItem(props) {
  return (
    <li
      className={"nav-item mr-2 " + (props.active && "active")}
      data-toggle="collapse"
      data-target=".navbar-collapse.show"
    >
      <Link className="nav-link" to={props.to}>
        {props.title}{" "}
        {props.active && <span className="sr-only">(current)</span>}
      </Link>
    </li>
  );
}
