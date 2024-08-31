import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const removeTodo = (index) => {
    console.log("remove button ");
    
    const updatedTodos = todos.filter((i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
      />
      <button onClick={addTodo}>add ToDo</button>
      <div>{todos}</div>

      <ul>
        {todos.map((todo, index) => (
            
          <li key={index}>
            {todo}
            <button onClick={()=> removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
