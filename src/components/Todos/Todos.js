import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import styles from './todos.module.css';
import img1 from './dt.jpg';
import img2 from './doit.jpg';

export default function Todos() {
  const state = useSelector(state => state);

  return (
    <div className={styles.wrapper}>
      {
        state.length > 0 ?
          <>
            {state && state.map(element => {
              return (<div key={element.id} className={styles.list}>
                <Todo id={element.id} title={element.title} />
              </div>)
            })}
            <br />
            <div className={styles.container}>
              <img src={img1} alt="https://i.pinimg.com/564x/1b/71/97/1b719784c82adaf96b79123e2b4be877.jpg" />
            </div>
          </>
          :
          <div className={styles.container}>
            <img src={img2} alt="https://i.pinimg.com/564x/6f/e2/5f/6fe25fcdf430117ce658316dd526acc4.jpg" />
          </div>
      }
    </div >
  )
};