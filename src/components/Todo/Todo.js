import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './todo.module.css';
import { toDone, removeTodo } from '../../actions/index'

export function Todo({ id, title, status }) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  function handleStatus(e) {
    console.log('entree');
    console.log(e.target, 'eeeeeeeeee');
    // dispatch(toDone(element));
  }

  return (
    <div key={id}>
      {
        status === 'Done' ?
          <p className={styles.done}>{title}</p>
          :
          <p>{title}</p>
      }
    </div>
  )
};

export default Todo;