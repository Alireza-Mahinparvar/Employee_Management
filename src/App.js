import "./App.css";
import Homepage from "./container/homepage";

function App() {
  return <div className="App">
    <Homepage />
  </div>
}



export default App;





























// import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Login from "./components/login.component";
// import SignUp from "./components/signup.component";
// import Homepage from "./components/homepage.components";

// function App() {
//   return ( <Router>
    
//     {
      

      
//      <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="nav-link" to={"/homepage"}>E-Management</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="Homepage" to={"/homepage"}>Homepage</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="outer">
//         <div className="inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//             <Route path="/homepage" component={Homepage} />
//           </Switch>
//         </div>
//       </div>
//     </div> }
//     </Router> 
//   ); 
// }

// export default App;



