// import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import axios from "axios";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Navigation from "./components/navigation";
import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // <Router>
      //   <Navbar />
      //   <Switch>
      //     <Route path="/" exact component={SignUp} />
      //     <Route path="/reports" component={SignUp} />
      //     <Route path="/products" component={SignUp} />
      //   </Switch>
      // </Router>
      <Navigation />
      //   <Router>
      //     <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      //       <div className="container">
      //         <Link className="navbar-brand" to={"/sign-in"}>
      //           E-Management
      //         </Link>
      //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      //           <ul className="navbar-nav ml-auto">
      //             <li className="nav-item">
      //               <Link className="nav-link" to={"/sign-in"}>
      //                 Sign in
      //               </Link>
      //             </li>
      //             <li className="nav-item">
      //               <Link className="nav-link" to={"/sign-up"}>
      //                 Sign up
      //               </Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //     </nav>
      //     <div className="App">
      //       <div className="outer">
      //         <div className="inner">
      //           <Switch>
      //             <Route exact path="/" component={Login} />
      //             <Route path="/sign-in" component={Login} />
      //             <Route path="/sign-up" component={SignUp} />
      //             {/* <Route path="/dashboard" component={Das}/> */}
      //           </Switch>
      //         </div>
      //       </div>
      //     </div>

      //   </Router>
    );
  }
}

// // export default App;
// import React from "react";

// // We use Route in order to define the different routes of our application
// import { Route } from "react-router-dom";

// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import Edit from "./components/edit";
// import Create from "./components/create";
// import RecordList from "./components/recordList";

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Route exact path="/">
//         <RecordList />
//       </Route>
//       <Route path="/edit/:id" component={Edit} />
//       <Route path="/create">
//         <Create />
//       </Route>
//     </div>
//   );
// };

export default App;
