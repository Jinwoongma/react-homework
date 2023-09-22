import React, {useState, useEffect, useRef} from 'react'
import styles from './TodoList.module.css'
import TodoListHeader from './TodoListHeader'
import TodoListInput from './TodoListInput'
import TodoListItems from './TodoListItems'

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputText, setInputText] = useState('');
  const nextId = useRef(0);

  const handleOnSubmit = (e) => {
    const todo = {
      id: nextId.current,
      text: inputText,
    }
    setTodoList(
      [...todoList, todo]
    )
    setInputText('');
    nextId.current += 1;
    e.preventDefault();
  }

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleRemove = (id) => {
    setTodoList(((prev) => {
      return prev.filter(todo => todo.id !== id)
    }));
  }

  useEffect(() => {
    console.log(todoList)

  }, [todoList])
  

  return (
    <div className={styles.layout}>
      <TodoListHeader title="Todo List"/>
      <TodoListInput value={inputText} 
        onSubmit={handleOnSubmit} 
        onChange={handleInputChange}
      />
      <TodoListItems todoList={todoList} onRemove={handleRemove}/>
    </div>
  )
}

export default TodoList