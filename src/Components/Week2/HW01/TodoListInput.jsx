import React from 'react'
import styles from './TodoListInput.module.css'

const TodoListInput = ({value, onChange, onSubmit}) => {
  return (
    <form className={styles['todo-input-form']} onSubmit={onSubmit}>
      <input className={styles['todo-input-box']} 
        type="text" 
        placeholder='할 일을 입력해주세요'
        value={value}
        onChange={onChange}
      />
      <button className={styles['todo-input-button']}
        type='submit'
        >
          추가
      </button>
    </form>
  )
}

export default TodoListInput