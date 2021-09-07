import React from 'react';
import Todos from '../Todos/Todos';
import styles from './home.module.css';

function Home() {
  return (
    <div className={styles.grid}>
      <Todos status='Todo' />
      <Todos status='InProgress' />
      <Todos status='Done' />
    </div>
  )
};

export default Home;