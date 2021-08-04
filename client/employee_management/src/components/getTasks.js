import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";

const Role = (props) => (
  <tr>
    <td>{props.role.role}</td>
    <li>{props.role.tasks[0]}</li>
    <li>{props.role.tasks[1]}</li>
    <li>{props.role.tasks[2]}</li>
  </tr>
);

const Task = (props) => (
  <tr>
    <td>{props.task.e_id}</td>
    <td>{props.task.task_completed}</td>
    <td>{props.task.role}</td>
    <td>{props.task.priority}</td>
  </tr>
);

export default class RecordList extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteRecord = this.deleteRecord.bind(this);
    this.state = {
      records: [],
      roles: [],
      tasks: [],
      isCompleted: "",
    };
  }

  // This method will get the data from the database.
  componentDidMount() {
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

  // This method will delete a record based on the method
  deleteRecord(id) {
    axios.delete("http://localhost:3000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      record: this.state.records.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.records.map((currentrecord) => {
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
    return this.state.roles.map((currentrecord) => {
      return (
        <Role
          role={currentrecord}
          // deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This method will map out the users on the table
  taskList() {
    return this.state.tasks.map((currentrecord) => {
      return (
        <Task
          task={currentrecord}
          // deleteRecord={this.deleteRecord}
          key={currentrecord._id}
        />
      );
    });
  }

  // This following section will display the table with the records of individuals.
  render() {
    return (
      <div>
        <h3>Roles List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Role</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>{this.roleList()}</tbody>
        </table>

        {/* <h3>Tasks List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Role </th>
              <th>Priority </th>
            </tr>
          </thead>
          <tbody>{this.taskList()}</tbody>
        </table> */}
      </div>
    );
  }
}
