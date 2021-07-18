import React, { Component } from "react";
// import "react-bootstrap";
import { BrowserRouter as Link } from "react-router-dom";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./navigation";
import Footer from "./footer.js";

export default class PerformanceReview extends Component {
  render() {
    return (
      <div>
        {/* <Navigation /> */}

        {/* <div></div> */}
        {/* <div class="jumbotron text-center">
          <h1>My First Bootstrap Page</h1>
          <p>Resize this responsive page to see the effect!</p>
        </div> */}

        <div class="displayNav">
          <div class="container-1">Current Grade + Comments</div>
          <div class="container-2">...Review History</div>
          <div class="container-3">...Profile</div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
