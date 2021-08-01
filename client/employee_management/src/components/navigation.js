import React, { useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App.css";
import "./pageLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebarData";
import "./navbar.css";
import { IconContext } from "react-icons";

import Login from "./login.component";
import Emails from "./Emails";
import performanceReview from "./performanceReview";
import UserDashboard from '../components/Employee/EmployeeDashboard';
import EditForm from '../components/Employee/EditForm';
import AddForm from '../components/Employee/AddForm';
import Profile from '../components/profile/Profile.js';
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css";

export default function Navigation() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <IconContext.Provider value={{ color: "Red" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </IconContext.Provider>

        <div className="container ">
          <a className="navbar-brand " href="#">
            E-Management
          </a>

          <a style={{ marginLeft: "60rem" }}>
            <FaIcons.FaRegUser />
            User Name
          </a>
          <a
            href="/sign-in"
            className="btn  button1"
            role="button"
            type="submit"
            style={{
              borderColor: "#3bbfe3",
              borderRadius: "20rem",
              color: "red",
            }}
          >
            Logout
          </a>
        </div>
      </nav>
      <div className="App">
        {/* <div className="outer">
            <div className="inner"> */}
        <Switch>
          <Route exact path="/emails" component={Emails} />
          <Route path="/performanceReview" component={performanceReview} />
          <Route path="/HR-Resources" component={Emails} />
          <Route path="/RecentActivity" component={Emails} />
          <Route path="/login" component={Login}/>
          <Route path="/Dashboard" exact component={UserDashboard} />
          <Route path="/edit/:id" component={EditForm} />
          <Route path="/add" component={AddForm} />
          <Route path="/profile" component={Profile} />
          {/* <Route path="/dashboard" component={Das}/> */}
          <div className="outer">
            <div className="inner">
              <Route path="/sign-in" component={Login} />
            </div>
          </div>
        </Switch>
        {/* </div>
          </div> */}
      </div>
    </Router>
  );
}
