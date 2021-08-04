const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

/******************************************************************
 *                    /GET_TASKS API MATERIAL                     *
 ******************************************************************/

// This section will get a list of role an task info
recordRoutes.route("/get_tasks").get(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  db_connect
    .collection("get_tasks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/get_tasks/add").post(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myobj = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    isCompleted: req.body.isCompleted,
    role: req.body.role,
    task: req.body.task,
  };
  db_connect.collection("get_tasks").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update_get_tasks/:id").put(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      // firstname: req.body.firsname,
      // lastname: req.body.lastname,
      // role: req.body.role,
      // task: req.body.task,
      isCompleted: req.body.isCompleted,
    },
  };
  db_connect
    .collection("get_tasks")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employee_management");
  var myquery = { id: req.body.id };
  db_connect.collection("get_tasks").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

/******************************************************************
 *                    /ROLE_INFO API MATERIAL                      *
 ******************************************************************/

// This section will get a list of role an task info
recordRoutes.route("/role_info").get(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  db_connect
    .collection("role_info")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});
recordRoutes.route("/role_info/find").get(function (req, res, params) {
  let db_connect = dbo.getDb("employee_management");
  db_connect
    .collection("role_info")
    .find({ role: params })
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you create a new record.
recordRoutes.route("/role_info/add").post(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myobj = {
    role: req.body.role,
    tasks: req.body.tasks,
  };
  db_connect.collection("role_info").insertOne(myobj, function (err, res) {
    if (err) throw err;
  });
});

// This section will help you update a record by id.
recordRoutes.route("/update_role/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employee_management");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      role: req.body.role,
    },
    $push: {
      tasks: req.body.tasks,
    },
  };
  db_connect
    .collection("role_info")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employee_management");
  var myquery = { id: req.body.id };
  db_connect.collection("role_info").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

/******************************************************************
 *                    /RECORD API MATERIAL                        *
 ******************************************************************/
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
    firstname: req.body.firsname,
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
      firstname: req.body.firsname,
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
recordRoutes.route("deleteRecord/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employee_management");
  var myquery = { id: req.body.id };
  db_connect.collection("emp").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

module.exports = recordRoutes;
