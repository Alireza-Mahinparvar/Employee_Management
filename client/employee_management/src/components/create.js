import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEid = this.onChangeEid.bind(this);
    this.onChangeManager = this.onChangeManager.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      e_id: "",
      manager: "",
      role: "",
      username: "",
    };
  }

  // These methods will update the state properties.
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

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeEid(e) {
    this.setState({
      e_id: e.target.value,
    });
  }

  onChangeManager(e) {
    this.setState({
      manager: e.target.value,
    });
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new record(newperson) to the database.
    const newperson = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.email,
      e_id: this.state.email,
      manager: this.state.email,
      role: this.state.email,
      username: this.state.email,
    };

    axios
      .post("http://localhost:3000/record/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      e_id: "",
      manager: "",
      role: "",
      username: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div style={{ marginTop: 20 }}>
        <h3>Create New Record</h3>
        <form onSubmit={this.onSubmit}>
          <h3>Register</h3>

          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              value={this.state.firstname}
              onChange={this.onChangeFirstname}
              required="requried"
            />
          </div>

          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              placeholder="Last Name"
              className="form-control"
              value={this.state.lastname}
              onChange={this.onChangeLastname}
              required="requried"
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="text"
              placeholder="eg. emp.name@gmail.com"
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              required="requried"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="text"
              placeholder="Password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
              required="requried"
            />
          </div>

          <button
            type="submit"
            value="Register"
            className="btn btn-dark btn-lg btn-block"
          />

          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">Log in?</a>
          </p>
        </form>
      </div>
    );
  }
}
