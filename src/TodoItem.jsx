import React from "react";

const TodoItem = (props) => {
  return (
    <li
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
};

export default TodoItem;
