import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

class EditTask extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeIsCompleted = this.onChangeIsCompleted.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      role: "",
      task: "",
      isCompleted: false,
    };
  }
  // This will get the record based on the id from the database.
  componentDidMount() {
    axios
      .get("http://localhost:3000/get_tasks/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          isCompleted: response.data.isCompleted,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // These methods will update the state properties.
  onChangeIsCompleted(e) {
    this.setState({
      isCompleted: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();
    const newEditedperson = {
      isCompleted: true,
    };
    console.log(newEditedperson);

    // This will send a post request to update the data in the database.
    axios
      .post("http://localhost:3000/update_get_tasks/610696078e5d50552f479b63", {
        isCompleted: true,
      })
      .then((res) => console.log("New Data", res.data));

    // this.props.history.push("/TasksList");
    <Redirect to="/TasksList" />;
  }

  // This following section will display the update-form that takes the input from the user to update the data.
  render() {
    return (
      <div>
        <h3 align="center">Update Record</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>is Completed: </label>
            <select
              className="form-control"
              value={this.state.isCompleted}
              onChange={this.onChangeIsCompleted}
              placeholder="here"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
          </div>
          {/* <div className="form-group">
            <label>Position: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.person_position}
              onChange={this.onChangePersonPosition}
            />
          </div>
          <div className="form-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityLow"
                value="Intern"
                checked={this.state.person_level === "Intern"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Intern</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityMedium"
                value="Junior"
                checked={this.state.person_level === "Junior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Junior</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="priorityOptions"
                id="priorityHigh"
                value="Senior"
                checked={this.state.person_level === "Senior"}
                onChange={this.onChangePersonLevel}
              />
              <label className="form-check-label">Senior</label>
            </div> */}
          {/* </div> */}
          <br />

          <div className="form-group">
            <input
              type="submit"
              value="Update Record"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

// You can get access to the history object's properties and the closest <Route>'s match via the withRouter
// higher-order component. This makes it easier for us to edit our records.

export default withRouter(EditTask);
