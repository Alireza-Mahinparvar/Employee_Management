import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import firebase from "firebase";
import Dashboard from "./components/dashboard";
import PerformanceReview from "./components/performanceReview";
import Navigation from "./components/navigation";
import Emails from "./components/Emails";

var firebaseConfig = {
  apiKey: "AIzaSyBNvJU4V-5hb9Y-5FNISO3l21qDYDKJfIQ",
  authDomain: "auth-development-f40b0.firebaseapp.com",
  projectId: "auth-development-f40b0",
  storageBucket: "auth-development-f40b0.appspot.com",
  messagingSenderId: "1065805260689",
  appId: "1:1065805260689:web:55ecc4a0b7c7521d0b9c30",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const DATA = [
  { id: "todo-0", name: "Schedule sprint", completed: true },
  { id: "todo-1", name: "Review code", completed: false },
  { id: "todo-2", name: "Attend meeting", completed: false }
];

/*referencing the express library and creating an application */
// let express = require("express");
// let app = express();
// app.use(express.static("public"));

ReactDOM.render(
  <BrowserRouter>
    <Emails tasks={DATA} />
  </BrowserRouter>,
  document.getElementById("root")
);
