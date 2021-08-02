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


      /*
      function userInput(event){
               userinput = document.getElementById("myVal").value
             //  console.log(userinput)
                // console.log(document.getElementById("myVal").value)
            //draw(document.getElementById("myVal").value)
           d3.select('svg').remove();
            main();
            console.log("Main has been called")
            // draw(document.getElementById("myVal").value)
            return false;
        }
        */


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
<select class="ddbutton" id="new-todo-input" 
          className="input input__lg"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}>
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
          class = "comment"
          name="text"
          autoComplete="off"
          value={name}
          onChange={handleChange}
        />
    </form>
  );
}

export default Form;
