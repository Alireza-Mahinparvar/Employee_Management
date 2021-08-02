import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import firebase from 'firebase';

// var firebaseConfig = {
//   apiKey: "AIzaSyDilyuXhpZe3Tdz6xXjVWHEeEhUoouhVlQ",
//   authDomain: "e-management-db6a7.firebaseapp.com",
//   projectId: "e-management-db6a7",
//   storageBucket: "e-management-db6a7.appspot.com",
//   messagingSenderId: "740156227965",
//   appId: "1:740156227965:web:fe17dec39a470646814c14"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);

