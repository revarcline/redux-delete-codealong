import React from "react";

const Todo = (props) => (
  <li>
    {props.todo.text}
    <span>
      <button onClick={() => props.delete(props.todo.id)}>delete</button>
    </span>
  </li>
);

export default Todo;
