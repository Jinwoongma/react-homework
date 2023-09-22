import React from 'react'
import styles from './TodoListItem.module.css'

const TodoListItem = ({todo, onRemove}) => {
  return (
    <div className={styles['todo-item']}>
      <span className={styles['todo-item-text']}>{todo.text}</span>
      <button className={styles['todo-item-button']} 
        onClick={() => onRemove(todo.id)}
        >
          삭제
      </button>
    </div>
  )
}

export default TodoListItem