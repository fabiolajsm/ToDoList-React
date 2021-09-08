import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './todo.module.css';
import { removeTodo } from '../../actions/index'

export function Todo({ id, title }) {
  const [css, setCss] = useState(true);
  const dispatch = useDispatch();

  function handleDelete(e) {
    e.preventDefault();
    dispatch(removeTodo(id));
  }
  function handleStyle() {
    return css ? setCss(false) : setCss(true);
  }
  return (
    <div key={id} onClick={handleStyle}>
      {
        !css ?
          <p className={styles.done}>{title}</p>
          :
          <p>{title}</p>
      }
      <button name="remove" onClick={handleDelete}>X</button>
    </div>
  )
};

export default Todo;