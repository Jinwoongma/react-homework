import React from "react";
import styles from "./TodoListHeader.module.css";

const TodoListHeader = ({ title }) => {
  return (
    // css.module에서 '-' 사용 시 주의
    <div className={styles["todo-header"]}>
      <h1>{title}</h1>
    </div>
  );
};

export default TodoListHeader;
