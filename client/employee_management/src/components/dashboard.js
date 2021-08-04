import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "./dashboard.css";
export default function Dashboard() {
  return (
    <div>
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"-"}>
            E-Management
          </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto" class="nav nav-pills">
              <li className="nav-item">
                <Link className="nav-link" href="#profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#Recent Activity"}>
                  Recent Activity
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#HR_Resources"}>
                  HR Resources
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#Performance_Review"}>
                  Performance Review
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"#Emails"}>
                  Emails
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"#"}>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
        <h2 className="box1" id="profile">
          @profile
        </h2>
        <p>...</p>
        <h2 id="profile">@HR_Resources</h2>
        <p>..sadfasdf.</p>
        <h2 id="profile">@Performance_Review</h2>
        <p>..sadfasdf.</p>
        <h2 id="profile">@Emails</h2>
        <p>..sadfasdf.</p>
      </div>
    </div>
  );
}
