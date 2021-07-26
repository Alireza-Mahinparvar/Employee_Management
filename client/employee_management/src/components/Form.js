import React, { useState } from "react";


function Form(props) {
    const [name, setName] = useState('');
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(name);
        setName("");
      }

      function handleChange(e) {
        setName(e.target.value);
      }

  return (
    <form onSubmit={handleSubmit}>
       <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Assign a task
          </label>
        </h2>
        <select class="ddbutton">
  <option value="1" selected="selected">Role</option>
  <option value="2">JS programmer</option>
  <option value="3">React programmer</option>
  <option value="4">Program manager</option>
</select>
<hr></hr>
<select class="ddbutton">
  <option value="1" selected="selected">Task</option>
  <option value="2">Commit changes</option>
  <option value="3">Review request</option>
  <option value="4">Plan weekly sprints</option>
</select>
<hr></hr>
<button type="submit" className="btn btn__primary btn__lg">
        Submit
      </button>
      <hr></hr>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
    </form>
  );
}

export default Form;
