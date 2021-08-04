import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";

const Record = (props) => (
  console.log("Called: Record "),
  (
    <tr>
      <td>{props.record.role}</td>
      <td>{props.record.firstname}</td>
      <td>{props.record.lastname}</td>
      <td>{props.record.email}</td>

      {/* <td>{props.record._id}</td> */}

      {/* <td>{props.record.e_id}</td> */}

      {/* <td>
        <Link to={"/edit/" + props.record._id}>Edit</Link> |
        <a
          // href="/"
          onClick={() => {
            props.deleteRecord(props.record._id);
          }}
        >
          Delete
        </a>
      </td> */}
    </tr>
  )
);

const Role = (props) => (
  console.log("Called: Role "),
  (
    // console.log("TAKS", props.task),
    <tr>
      <td>{props.role.role}</td>
      <li>{props.task}</li>

      <li>{props.role.tasks[0]}</li>
      <li>{props.role.tasks[1]}</li>
      <li>{props.role.tasks[2]}</li>
    </tr>
  )
);

const Task = (props) => (
  console.log("Called: Task "),
  (
    <tr>
      {/* <td>
      {props.task.firstname} {props.task.lastname}
    </td> */}
      <td>{props.task.role}</td>
      <td>{props.task.tasks}</td>
      {/* <td>{props.task.task_completed}</td>
    <td>{props.task.e_id}</td> */}
    </tr>
  )
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = {
      compareRole: "Programmer",
      records: [],
      roles: [],
      tasks: [],
      result: [],
      isCompleted: [],
    };
  }

  // This method will get the data from the database.
  componentDidMount() {
    console.log("Called: componentDidMount ");

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
        this.setState({ isCompleted: response.data });
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

  // This method will delete a record based on the method
  deleteRecord(id) {
    // id.preventDefault();
    console.log("Called: deleteRecord ");

    axios
      .delete("http://localhost:3000/deleteRecord" + id)
      .then((response) => {
        console.log("Aftere Deleting", response.data);
      })
      .catch((err) => {
        console.log(err);
      });

    this.setState({
      records: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
    console.log("Called: recordList ");

    return this.state.records.map((currentrecord) => {
      console.log("Called: recordList in Map ", currentrecord._id);

      return (
        <Record
          record={currentrecord}
          deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This method will map out the users on the table
  roleList() {
    console.log("Called: roleList ");

    return this.state.roles.map((currentrecord) => {
      return (
        <Role
          // task={currentrecord.tasks}
          role={currentrecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This method will map out the users on the table
  taskList() {
    console.log("Called: taskList ");

    return this.state.tasks.map((currentrecord) => {
      return <Task task={currentrecord} key={currentrecord._id} />;
    });
  }

  getResult() {
    console.log("Called: getResult ");

    let value = this.state.compareRole.toLowerCase();
    let result = this.state.roles.filter((data) => {
      // console.log(data.role.search("Scientist"));
      return data.role.search(value) != -1;
    });

    console.log("isdone", this.state.roles);
    return result.map((currentrecord) => {
      return <Task task={currentrecord} key={currentrecord._id} />;
    });
    // return console.log(result);
  }
  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Current Employees</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Role</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Emails</th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>

        {/* <h3>Roles List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Role</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{this.roleList()}</tbody>
        </table> */}

        {/* <h3>Tasks List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Role </th>
              <th>Task </th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
          <tbody>{this.getResult()}</tbody>
        </table> */}
      </div>
    );
  }
}
