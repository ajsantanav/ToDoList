import React from 'react'
import  {useState } from 'react'

function ToDo(props) {
  return (
    <div>
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
    </div>
  )
}

export default ToDo