import React, { useContext, useEffect, useRef } from "react";
import styles from "./TodoListItem.module.css";
import { TodoContext } from "./TodoList";
import { GrEdit, GrCheckmark, GrTrash } from "react-icons/gr";

const TodoListItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);
  const editInput = useRef();

  useEffect(() => {
    if (todo.isEditing) editInput.current.focus();
  }, [todo.isEditing]);

  return (
    <div className={styles["todo-item"]}>
      {todo.isEditing ? (
        <input
          className={styles["todo-item-edit-input"]}
          type="text"
          defaultValue={todo.text}
          onChange={(e) => (todo.text = e.target.value)}
          ref={editInput}
        />
      ) : (
        <span className={styles["todo-item-text"]}>{todo.text}</span>
      )}
      {todo.isEditing ? (
        <>
          <button
            className={styles["todo-item-save-button"]}
            onClick={() => {
              dispatch({ type: "edit", id: todo.id, value: todo.text });
            }}
          >
            <GrCheckmark />
          </button>
        </>
      ) : (
        <div className={styles["button-wrapper"]}>
          <GrEdit
            className={styles["todo-item-edit-button"]}
            onClick={() => {
              dispatch({ type: "editing", id: todo.id });
            }}
          />
          <GrTrash
            className={styles["todo-item-delete-button"]}
            onClick={() => dispatch({ type: "delete", id: todo.id })}
          />
        </div>
      )}
    </div>
  );
};

export default TodoListItem;
