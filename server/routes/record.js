const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  db_connect
    .collection("emp")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myobj = {
    firsname: req.body.firsname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    e_id: req.body.e_id,
    manager: req.body.manager,
    role: req.body.role,
    username: req.body.username,
  };
  db_connect.collection("emp").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      firsname: req.body.firsname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      e_id: req.body.e_id,
      manager: req.body.manager,
      role: req.body.role,
      username: req.body.username,
    },
  };
  db_connect
    .collection("emp")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employee_management");
  var myquery = { id: req.body.id };
  db_connect.collection("emp").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;
