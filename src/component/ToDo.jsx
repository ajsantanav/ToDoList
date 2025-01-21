import React from "react";
import  { useState } from "react";

const initialState = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  },
  {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
  },
  {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
  },
  {
    "userId": 1,
    "id": 6,
    "title": "qui ullam ratione quibusdam voluptatem quia omnis",
    "completed": false
  },
  {
    "userId": 1,
    "id": 7,
    "title": "illo expedita consequatur quia in",
    "completed": false
  },
  {
    "userId": 1,
    "id": 8,
    "title": "quo adipisci enim quam ut ab",
    "completed": true
  },
  {
    "userId": 1,
    "id": 9,
    "title": "molestiae perspiciatis ipsa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 10,
    "title": "illo est ratione doloremque quia maiores aut",
    "completed": true
  },
  {
    "userId": 1,
    "id": 11,
    "title": "vero rerum temporibus dolor",
    "completed": true
  },
  {
    "userId": 1,
    "id": 12,
    "title": "ipsa repellendus fugit nisi",
    "completed": true
  },
  {
    "userId": 1,
    "id": 13,
    "title": "et doloremque nulla",
    "completed": false
  },
  {
    "userId": 1,
    "id": 14,
    "title": "repellendus sunt dolores architecto voluptatum",
    "completed": true
  },
  {
    "userId": 1,
    "id": 15,
    "title": "ab voluptatum amet voluptas",
    "completed": true
  },
  {
    "userId": 1,
    "id": 16,
    "title": "accusamus eos facilis sint et aut voluptatem",
    "completed": true
  },
  {
    "userId": 1,
    "id": 17,
    "title": "quo laboriosam deleniti aut qui",
    "completed": true
  },
  {
    "userId": 1,
    "id": 18,
    "title": "dolorum est consequatur ea mollitia in culpa",
    "completed": false
  },
  {
    "userId": 1,
    "id": 19,
    "title": "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    "completed": true
  },
  {
    "userId": 1,
    "id": 20,
    "title": "ullam nobis libero sapiente ad optio sint",
    "completed": true
  }
];

function ToDo() {
  const [todos, setTodos] = useState([initialState]);
  const [newTodo, setNewTodo] = useState("");

  function handleAddTodo() {
    if (newTodo.trim() !== "") {
      setTodos([{ id: Date.now(), text: newTodo, completed: false, editing: false }, ...todos]);
      setNewTodo("");
    }
  };

  function handleToggleComplete(id) { //handles adding
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  function handleDeleteTodo(id){ //copy, deletes, and gives back list
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function handleEditTodo(id){ //edit, check if you clicked edit
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, editing: true } : todo
      )
    );
  };

  function handleSaveTodo(id, newText){
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, editing: false } : todo
      )
    );
  };

  return (
    <div className="container">
      <h1>Todo List</h1>

      <div style={{ marginBottom: "20px" }}>
        <input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)}/>
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {!todo.editing ? (
              <>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <span>{todo.text}</span>
                <button
                  onClick={() => handleEditTodo(todo.id)}
                  disabled={todo.completed}
                >
                  Edit
                </button>

                <button onClick={() => handleDeleteTodo(todo.id)} disabled={!todo.completed}
                >
                  Delete
                </button>
              </>
            ) : (
              <>
                <input
                  type="text"
                  defaultValue={todo.text}
                  onBlur={(e) => handleSaveTodo(todo.id, event.target.value)}
                  autoFocus
                />
                <button
                  onClick={(e) => handleSaveTodo(todo.id, e.target.previousSibling.value)}
                >
                  Save
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDo