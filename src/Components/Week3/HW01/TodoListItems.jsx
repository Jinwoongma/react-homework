import React, { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext } from "./TodoList";

const TodoListItems = () => {
  const { todoList } = useContext(TodoContext);
  return (
    <div >
      {todoList.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoListItems;
