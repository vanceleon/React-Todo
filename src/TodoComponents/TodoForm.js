//<TodoForm> will hold your input field and your Add Todo and Clear Completed buttons.
//Your input field should take in user input, and allow a user to press Enter or click on the Submit Button to add a todo to your list.
//Once a todo is submitted, the Todo List should re-render and show the added todo.
import React from "react";



const TodoForm = props => {
  return (
    <div>
      <form>
        <input
          onChange={props.handleTodoChange}
          placeholder="Enter Todos.."
          type="text"
          name="todo"
          value={props.value}
        />

        <button onClick={props.handleAddTodo}>Add Todo</button>
        <button onClick={props.handleClearTodos}>Clear Completed</button>
      </form>
    </div>
  );
};

export default TodoForm;
