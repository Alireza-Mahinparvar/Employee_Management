const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));


var  mongoose = require("mongoose"),
passport = require("passport"),
bodyParser = require("body-parser"),
LocalStrategy = require("passport-local"),
passportLocalMongoose =require("passport-local-mongoose"),
User = require("./models/user");
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// get driver connection
const dbo = require("./db/conn");

app.use(bodyParser.urlencoded({ extended: true }));
 
app.use(require("express-session")({
    secret: "Rusty is a dog",
    resave: false,
    saveUninitialized: false
}));
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
 
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function (req, res) {
    res.render("home");
});
 
// Showing secret page
app.get("/secret", isLoggedIn, function (req, res) {
    res.render("secret");
});
 
// Showing register form
app.get("/register", function (req, res) {
    res.render("register");
});
 
// Handling user signup
app.post("/register", function (req, res) {
    var username = req.body.username
    var password = req.body.password
    User.register(new User({ username: username }),
            password, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("register");
        }
 
        passport.authenticate("local")(
            req, res, function () {
            res.render("secret");
        });
    });
});
 
//Showing login form
app.get("/login", function (req, res) {
    res.render("login");
});
 
//Handling user login
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), function (req, res) {
});
 
//Handling user logout
app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/");
});
 
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/login");
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
    });
    console.log(`Server is runnings on port: ${port}`);
  });