import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../Todo/Todo';
import styles from './todos.module.css';

export default function Todos() {
  const state = useSelector(state => state);

  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>Todos</span>
      {
        state.length > 0 ? state.map(element => {
          return (
            <div key={element.id} className={styles.list}>
              {
                element.status === "Todo" ?
                  <div>
                    <Todo id={element.id} title={element.title} status={element.status} />
                  </div>
                  :
                  <div>
                    <p>el estilo tachado</p>
                  </div>
              }
            </div>
          )
        })
          :
          <div>
            <p>No hay Todos por hacer</p>
          </div>
      }
    </div>
  )
};