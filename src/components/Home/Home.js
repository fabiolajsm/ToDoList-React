import React from 'react';
import Todos from '../Todos/Todos';
import styles from './home.module.css';
import AddTodo from '../AddTodo/AddTodo';

function Home() {
  return (
    <div>
      <div className={styles.grid}>
        <AddTodo />
      </div>
      <br />
      <div className={styles.ctn}>
        <Todos />
      </div>
    </div>
  )
};

export default Home;