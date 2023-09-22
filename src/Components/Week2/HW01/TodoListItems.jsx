import React from "react";
import TodoListItem from "./TodoListItem";

const TodoListItems = ({ todoList, onRemove }) => {
  return (
    <div>
      {todoList.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
};

export default TodoListItems;
