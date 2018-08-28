//<Todo /> is a component that takes in the todo data and displays the task to the screen.

import React from "react";

const Todo = props => {
  return (
    <div
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onclick={() => props.handleToggleComplete(props.todo.id)}
    >
      {props.todo.task}
    </div>
  );
};

export default Todo;
