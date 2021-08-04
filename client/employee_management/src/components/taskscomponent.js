import React, { useState } from "react";
import "./taskStyle.css";

export default function ListItem(props) {
  const [isEditing, setEditing] = useState(false);

  const [newName, setNewName] = useState("");

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //props.editTask(props.id, newName);
    //setNewName("");
    setEditing(false);
  }

  const editingTemplate =
    (console.log("Editing Template"),
    (
      <form className="stack-small" onSubmit={handleSubmit}>
        <div style={{ marginLeft: "20px" }}>
          Issued to: {props.nameL}, {props.nameF}
          <div>Role: {props.role}</div>
        </div>

        {/* <div className="form-group">
          <label className="taskList-label" htmlFor={props.id}>
            New name for {props.name}
          </label>
          <input
            id={props.id}
            className="taskList-text"
            type="text"
            value={newName}
            onChange={handleChange}
          />
        </div> */}
        <div className="btn-group">
          <button
            type="button"
            className="btn taskList-cancel"
            onClick={() => setEditing(false)}
          >
            Close
            <span className="visually-hidden">renaming {props.name}</span>
          </button>
        </div>
      </form>
    ));

  const viewTemplate = (
    <div>
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={false}
          // onChange={() => props.toggleTaskCompleted(props.id)}
        />

        <label className="todo-label" htmlFor={props.id}>
          {props.task}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
          View Details <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="submit"
          className="btn btn__danger"
          onClick={() => {
            props.deleteTask(props.list._id);
          }}
        >
          Delete
          <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </div>
  );

  return <li> {isEditing ? editingTemplate : viewTemplate}</li>;
}
