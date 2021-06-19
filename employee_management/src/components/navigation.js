import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./pageLayout.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default class Navigation extends Component {
  state = {
    clicked: false,
  };
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container ">
            {/* <Link className="navbar-brand" to={"/sign-in"}>
              E-Management
            </Link> */}
            <a class="navbar-brand " href="#">
              E-Management
            </a>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarTogglerDemo02"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    HR Resources
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Recent Activity
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    Performance Review
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/"}>
                    E-mails
                  </Link>
                </li>
              </ul>
            </div>

            <a href="#" class="btn  button1" role="button" type="submit">
              Logout
            </a>
          </div>
        </nav>
      </Router>
    );
  }
}
