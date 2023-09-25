import React, { useState, useEffect, useRef } from "react";
import styles from "./TodoList.module.css";
import TodoListHeader from "./TodoListHeader";
import TodoListInput from "./TodoListInput";
import TodoListItems from "./TodoListItems";
import { createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext();
const initialState = [];

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "add":
      newState = [...state, { id: action.id, text: action.value }];
      break;
    case "delete":
      return;
    default:
      return state;
  }
  return newState;
};

const TodoList = () => {
  const [inputText, setInputText] = useState("");
  const [todoList, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(0);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <TodoContext.Provider value={{ todoList, dispatch }}>
      <div className={styles.layout}>
        <TodoListHeader title="Todo List" />
        <TodoListInput
          value={inputText}
          onSubmit={(e) => {
            dispatch({
              type: "add",
              id: nextId.current,
              value: inputText,
            });
            e.preventDefault();
            setInputText("");
            nextId.current += 1;
          }}
          onChange={handleInputChange}
        />
        <TodoListItems />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoList;
