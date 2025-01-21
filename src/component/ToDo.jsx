import React from 'react'
import  {useState } from 'react'

function ToDo() {

  const [tasks, setTasks] = useState("");
  const [newTasks, setnewTasks] = useState("");

  function addTask() {
    setTasks(newTasks);
  }

  function deleteTask() {

  }

  function editTask() {
    
  }

  return (
    <div className=''>
      <h1>To do List</h1>
      <form>
      <h2 className="">
          <label className="">
            Add your task:
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="">Add</button>
      </form>

      <ul className=''>
          <li></li>
      </ul>
    </div>
  )
}

export default ToDo