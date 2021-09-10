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
        state.length > 0 ? state.map(element => {
          return (
            <>
              <div key={element.id} className={styles.list}>
                <Todo id={element.id} title={element.title} />
              </div>
              <img src={img1} alt="photo" />
            </>
          )
        })
          :
          <img src={img2} alt="photo" />
      }

    </div >
  )
};