import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import * as FaIcons from "react-icons/fa";

import "./tasks.css";

import ListItem from "./taskscomponent.js";
import { nanoid } from "nanoid";

let filter = "ALL";

const FilterButton = (props) => {
  return (
    <button
      type="button"
      className="btn toggle-btn"
      aria-pressed={props.isPressed}
      onClick={() => {
        filter = props.name;
      }}
    >
      <span className="visually-hidden">Show </span>
      <span>{props.name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
};

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const filterList = FILTER_NAMES.map((name) => (
  <FilterButton key={name} name={name} isPressed={name === filter} />
));

// const ListItems = (props) => (
//   console.log("Called: ListItems "),
//   (
//     // console.log("Called: ListItems ", props.record._id),
//     <tr>
//       <td> {props.fullName}</td>
//       <td> {props.role}</td>
//       <td>
//         {props.tasks}
//         {/* <li> {props.setRole}</li> */}
//       </td>
//       <button class="btn">
//         <i class="fa fa-trash"></i>
//         {() => {
//           props.deleteTask("610634b5dc0428b285fa19c6");
//         }}
//       </button>
//     </tr>
//   )
// );

const TasksLists = (props) => (
  console.log("Called: TasksLists "),
  (
    // console.log("Called: ListItems ", props.record._id),
    <tr>
      <td>
        {props.list.firstname} {props.list.lastname}
      </td>
      <td> {props.list.role}</td>
      <td> {props.list.task}</td>
      {/* <td> {props.list._id}</td> */}

      {/* <Link to={"/Edit_Task/" + props.list._id}>Completed?</Link> */}
      <button
        onClick={() => {
          console.log(props.list._id);
          props.deleteTask(props.list._id);
        }}
      >
        Delete
      </button>
    </tr>
  )
);

export default class TasksList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeTaskComplete = this.onChangeTaskComplete.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeTask = this.onChangeTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.handleRoleChange = this.handleRoleChange.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.taskList = this.taskList.bind(this);

    // this.addTask = this.addTask.bind(this);

    this.state = {
      firstname: " ",
      lastname: "Polo",
      task_complete: "false",
      role: "astronaut",
      task: "Conference call",

      base_URL: "http://localhost:3000/",

      tasks: [],
      roles: [],
      records: [],

      tempRoleChange: "nothing",
      tempTaskArray: " ",

      filter: "ALL",
    };
  }

  // This method will get the data from the database.
  componentDidMount() {
    console.log("Called: componentDidMount ");
    // this.getName();
    // this.getRole();
    // this.getTasks();
    // this.addTask();
    axios
      .get("http://localhost:3000/get_tasks/")
      .then((response) => {
        this.setState({ tasks: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/role_info/")
      .then((response) => {
        this.setState({ roles: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:3000/record/")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  handleDelete(e) {
    this.deleteTask(e.target.value);
  }
  onChangeFirstname(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastname(e) {
    this.setState({
      lastname: e.target.value,
    });
  }

  onChangeTaskComplete(e) {
    this.setState({
      task_complete: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeTask(e) {
    this.setState({
      task: e.target.value,
    });
  }

  handleSubmit(e) {
    // e.preventDefault();
    // this.getName();
    // setName("");
  }

  handleRoleChange(e) {
    console.log("Role: event value is", e.target.value);
    this.setState({
      tempRoleChange: e.target.value,
    });
  }

  handleTaskChange(e) {
    console.log("Task: event value is", e.target.value);
    this.setState({
      tempTaskArray: e.target.value,
    });
  }

  // This function will handle the submission.
  // onSubmit(e) {
  //   e.preventDefault();

  //   // When post request is sent to the create url, axios will add a new record(newperson) to the database.
  //   const newTask = {
  //     firstname: this.state.firstname,
  //     lastname: this.state.lastname,
  //     task_complete: this.state.task_complete,
  //     role: this.state.role,
  //     task: this.state.task,
  //   };

  //   axios
  //     .post(this.state.base_URL + "/get_tasks/add", newTask)
  //     .then((res) => console.log(res.data));

  //   // We will empty the state after posting the data to the database
  //   this.setState({
  //     firstname: "",
  //     lastname: "",
  //     task_complete: "",
  //     role: "",
  //     task: "",
  //     rolesList: [],
  //   });
  // }

  // This function will map out the roles and filter the role that is the same as user input
  getRole() {
    console.log("Called: getRole ");

    let tempRole = [];
    let result = [];
    let value = this.state.tempRoleChange.toLowerCase();

    result = this.state.roles.filter((data) => {
      return data.role.includes(value) !== -1;
    });
    // console.log("From getRole, ", result);

    return result.map((currentrecord) => {
      tempRole = currentrecord.role;
      // console.log("From getRole, ", tempRole);

      if (tempRole == value) {
        return true;
      } else {
        return false;
      }
    });
  }

  getRoleForForm() {
    console.log("Called: getRoleForForm ");
    return this.state.roles.map((currentrecord) => {
      return <option value={currentrecord.role}> {currentrecord.role}</option>;
    });
  }

  getTaskForForm() {
    this.getTasks();
    return this.getTasks().map((currenttask) => {
      return (
        <option value={currenttask.tasks[0]}> {currenttask.tasks[0]}</option>
      );
    });
  }
  getTaskForForm1() {
    this.getTasks();
    return this.getTasks().map((currenttask) => {
      return (
        <option value={currenttask.tasks[1]}> {currenttask.tasks[1]}</option>
      );
    });
  }
  getTaskForForm2() {
    this.getTasks();
    return this.getTasks().map((currenttask) => {
      return (
        <option value={currenttask.tasks[2]}> {currenttask.tasks[2]}</option>
      );
    });
  }

  //This function will retrieve the Tasks and role of each person
  getTasks() {
    console.log("Called: getTasks ");

    let result = [];
    let tempTasks = [];
    let value = this.state.tempRoleChange.toLowerCase();

    if (this.getRole()) {
      result = this.state.roles.filter(function (data) {
        // return data.role.includes(value) !== -1;
        // return data._id.includes("60fdefe4d7bc2a0eb3c697dd");
        return data.role.includes(value);
      });
      // console.log("Called: getTasks ", result);

      return result.map(function (currenttask) {
        console.log("Tasks from getTasks", currenttask.tasks);
        // tempTasks = currenttask.tasks;
        return currenttask;

        // return tempTasks.map((tasklist) => {
        //   //   // console.log("FROM getTasks: ", tasklist);
        //   //   return <li>{tasklist}</li>;
        //   // console.log("tasks", tasklist);
        //   return tasklist;
        // });
      });
    }
  }

  //This function will retrieve the name and role of each person
  getName() {
    console.log("Called: getName ");
    let tempFname = [];
    let tempLname = [];
    let tempFullName = [];
    let tempRole = [];
    let tempTasks = this.getTasks();
    let result = [];
    let value = this.state.tempRoleChange.toLowerCase();

    if (this.getRole()) {
      result = this.state.records.filter((data) => {
        return data.role.search(value) !== -1;
      });
      return result.map((currentrecord) => {
        tempFname = currentrecord.firstname;
        tempLname = currentrecord.lastname;
        tempFullName = tempFname + " " + tempLname;
        tempRole = currentrecord.role;

        console.log("fullName", tempFullName);
        console.log("tempRole", tempRole);
        console.log("tempTasks", tempTasks);
        // console.log("key", currentrecord._id);

        return this.setState({
          firstname: tempFname,
          lastname: tempLname,
        });
        // <ListItems
        //   fullName={tempFullName}
        //   role={tempRole}
        //   tasks={tempTasks}
        //   key={currentrecord._id}
        //   setRole={this.state.role}
        //   deleteTask={this.deleteTask}
        // />
      });
    }
  }
  getFname() {
    console.log("Called: getFname ");
    let tempFname = [];
    let result = [];
    let value = this.state.tempRoleChange.toLowerCase();

    if (this.getRole()) {
      result = this.state.records.filter((data) => {
        return data.role.search(value) !== -1;
      });
      return result.map((currentrecord) => {
        tempFname = currentrecord.firstname;
        // console.log("tempfName", tempFname);
        // console.log("key", currentrecord._id);
        return tempFname;
      });
    }
  }
  getLname() {
    console.log("Called: getLname ");
    let tempFname = [];
    let result = [];
    let value = this.state.tempRoleChange.toLowerCase();

    if (this.getRole()) {
      result = this.state.records.filter((data) => {
        return data.role.search(value) !== -1;
      });
      return result.map((currentrecord) => {
        tempFname = currentrecord.lastname;
        // console.log("tempfName", tempFname);
        // console.log("key", currentrecord._id);
        return tempFname;
      });
    }
  }
  addToList(name) {
    let newTask = { id: "todo-" + nanoid(), name: name, completed: false };
  }
  addTask() {
    console.log("Called: addTask ");
    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    let newTask = {
      firstname: this.getFname(),
      lastname: this.getLname(),
      isCompleted: false,
      role: this.state.tempRoleChange,
      task: this.state.tempTaskArray,
    };

    axios
      .post("http://localhost:3000/get_tasks/add", newTask)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      firstname: "",
      lastname: "",
      isCompleted: "",
      role: "",
      task: "",
    });
    // return null;
  }

  editTask() {
    // <EditTaskList />;
  }

  // This function will map out the roles and filter the role that is the same as user input
  getAllTasks() {
    console.log("Called: getAllTasks ");

    let tempRole = [];
    let result = [];
    let value = this.state.tempRoleChange.toLowerCase();

    result = this.state.tasks.filter((data) => {
      return data.role.includes(value) !== -1;
    });
    // console.log("From getRole, ", result);

    return result.map((currentlist) => {
      return (
        <TasksLists
          list={currentlist}
          key={currentlist._id}
          deleteTask={this.deleteTask}
          addTask={this.addTask}
          editTask={this.editTask}
          getName={this.getName}
          handleDelete={this.handleDelete}
        />
      );
    });
  }

  // This method will delete a record based on the method
  deleteTask(id) {
    console.log("Called: deleteTask ", id);

    axios.delete("http://localhost:3000/" + id).then((response) => {
      console.log(response.data);
      this.setState({
        tasks: this.state.tasks.filter((el) => el._id != id),
      });
    });
  }

  // tasksNoun = 5 !== 1 ? "tasks" : "task";

  // headingText = `${this.state.tasks.length} ${this.tasksNoun} remaining`;

  taskList() {
    console.log("Called: taskList");

    let tasks = this.state.tasks;
    let result = tasks.map((currentlist) => {
      // console.log("TASKS", currentlist.role);
      return (
        <ListItem
          list={currentlist}
          id={currentlist._id}
          nameF={currentlist.firstname}
          nameL={currentlist.lastname}
          role={currentlist.role}
          task={currentlist.task}
          keyz={currentlist._id}
          deleteTask={this.deleteTask}
          // editTask = {this.editTask}
        />
      );
    });
    return result;
  }

  render() {
    return (
      <div style={{ marginTop: 20 }}>
        {/* <button
          type="submit"
          onSubmit={this.addTask}
          onClick={console.log("clicked")}
        >
          Add Task
        </button> */}
        {/* <h3>Tasks List</h3>

        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role </th>
              <th>Tasks available</th>
            </tr>
          </thead>

          <tbody>{this.getName()}</tbody>
        </table> */}
        {/* <button
          // href="http://localhost:3002/emails"
          onClick={() => {
            this.addTask();
          }}
        >
          Add Task
        </button>
        <h3>Tasks List from Database</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role </th>
              <th>Tasks available</th>
            </tr>
          </thead>
          <tbody>{this.getAllTasks()}</tbody>
        </table> */}

        <form>
          <h2>
            <label htmlFor="new-todo-input" className="label__lg">
              Assign a task
            </label>
          </h2>

          <select class="ddbutton" onChange={this.handleRoleChange}>
            <option selected="selected">Role</option>
            {this.getRoleForForm()}
          </select>

          <hr></hr>

          <select
            required="required"
            class="ddbutton"
            id="new-todo-input"
            className="input input__lg"
            name="text"
            autoComplete="off"
            // value={name}
            onChange={this.handleTaskChange}
          >
            <option selected="selected">Task</option>
            {this.getTaskForForm()}
            {this.getTaskForForm1()}
            {this.getTaskForForm2()}
          </select>
          <hr></hr>
          <button
            type="submit"
            className="btn btn__primary btn__lg "
            onSubmit={this.handleSubmit()}
            onClick={() => {
              this.addTask();
            }}
          >
            Submit
          </button>
          <hr></hr>
          {/* <input //this is the comment textbox
            type="text"
            id="new-todo-input"
            class="comment"
            name="text"
            autoComplete="off"
            // value={name}
            // onChange={handleChange}
          /> */}
        </form>
        {/* <div className="filters btn-group stack-exception">{filterList}</div> */}
        {/* <h2 id="list-heading">{headingText}</h2> */}
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {this.taskList()}
        </ul>
        {/* <table
          className="table table-hover"
          style={{
            marginTop: 20,
          }}
        >
          <thead>
            <tr>
              <th>Name</th>
              <th>Role </th>
              <th>Tasks Assigned</th>
            </tr>
          </thead>
          <tbody>{this.getAllTasks()}</tbody>
        </table> */}
        {/* <button
          type="submit"
          onSubmit={this.addTask}
          onClick={console.log("clicked")}
        >
          Add Task
        </button> */}
      </div>
    );
  }
}
