import React, { useState } from "react";


export default function TaskList(props) {
  const [isEditing, setEditing] = useState(false);
  
  const [newName, setNewName] = useState('');

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //props.editTask(props.id, newName);
    //setNewName("");
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
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
      </div>
      <div className="btn-group">
      <button
  type="button"
  className="btn taskList-cancel"
  onClick={() => setEditing(false)}
>
  Cancel
  <span className="visually-hidden">renaming {props.name}</span>
</button>
        <button type="submit" className="btn btn__primary taskList-edit">
          Save
          <span className="visually-hidden">new name for {props.name}</span>
        </button>
      </div>
    </form>
  );
  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
          <input
            id={props.id}
            type="checkbox"
            defaultChecked={props.completed}
            onChange={() => props.toggleTaskCompleted(props.id)}
          />
          <label className="todo-label" htmlFor={props.id}>
            {props.name}
          </label>
        </div>
        <h4>{newName}</h4>
        <div className="btn-group">
        <button type="button" className="btn" onClick={() => setEditing(true)}>
  Add Comment <span className="visually-hidden">{props.name}</span>
</button>
          <button
            type="button"
            className="btn btn__danger"
            onClick={() => props.deleteTask(props.id)}
          >
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
    </div>
  );


  return <li className="TaskList">{isEditing ? editingTemplate : viewTemplate}</li>;
}