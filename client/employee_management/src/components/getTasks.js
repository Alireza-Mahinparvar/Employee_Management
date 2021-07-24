import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";

const Record = (props) => <tr>{props.record.role}</tr>;

//   <tr>
//     <td>{props.record.role.map()}</td>
//   </tr>

export default class GetTasks extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    // this.deleteRecord = this.deleteRecord.bind(this);
    this.state = { roles: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/get_tasks/")
      .then((response) => {
        this.setState({ records: response.data });
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
  }

  // This method will map out the users on the table
  recordList() {
    return this.state.roles.map((currentrecord) => {
      return (
        <Record
          record={currentrecord}
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
        <h3>Record List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th> Role</th>
              <th> Tasks</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.recordList()}</tbody>
        </table>
      </div>
    );
  }
}
