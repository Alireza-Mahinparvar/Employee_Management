import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

function Form(props) {
  const [name, setName] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedTask, setselectedTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }

  function handleRoleChange(e) {
    setSelectedRole(e.target.value);
    console.log("selectedRole", selectedRole);
  }

  //This function will retrieve the Tasks and role of each person
  function getTasks() {
    console.log("Called: getTasks ");

    let result = [];
    let tempTasks = [];
    let value = this.state.compareRole.toLowerCase();

    result = this.state.roles.filter(function (data) {
      // return data.role.includes(value) !== -1;
      // return data._id.includes("60fdefe4d7bc2a0eb3c697dd");
      return data.role.includes(value);
    });
    // console.log("Called: getTasks ", result);

    return result.map(function (currenttask) {
      // console.log("Tasks from getTasks", currenttask.tasks);
      tempTasks = currenttask.tasks;

      return tempTasks.map((tasklist) => {
        // console.log("FROM getTasks: ", tasklist);
        return <li>{tasklist}</li>;
      });
    });
  }

  const roleArray = props.getRoleForForm;
  const technologyList = roleArray.map((v) => ({
    label: v,
    value: v,
  }));
  console.log("techList", technologyList);

  return (
    <div className="todoapp stack-large">
      <form onSubmit={handleSubmit}>
        <h2>
          <label htmlFor="new-todo-input" className="label__lg">
            Assign a task
          </label>
        </h2>
        <select
          class="ddbutton"
          options={roleArray}
          onChange={handleRoleChange}
        >
          <option selected="selected">Role</option>
          {roleArray.map((role) => {
            return <option value={role}> {role}</option>;
          })}
        </select>

        <hr></hr>

        <select
          class="ddbutton"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        >
          <option selected="selected">Task</option>
        </select>
        <hr></hr>
        <button type="submit" className="btn btn__primary btn__lg ">
          Submit
        </button>
        <hr></hr>
        <input //this is the comment textbox
          type="text"
          id="new-todo-input"
          class="comment"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Form;
