import React from 'react';
import Todo from '../Todo/Todo';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import styles from './todos.module.css';

export function Todos(props) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{props.status}</span>
      <div className={styles.td}>
        {
          props.todos.map(element => {
            return (
              <Link to={`/edit/${element.id}`} key={element.id} className={styles.detail}>
                {element.status === props.status ?
                  <li>
                    <ul>
                      <Todo title={element.title} />
                    </ul>
                  </li>
                  : null
                }
              </Link>
            )
          })
        }
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    todos: state
  };
}
export default connect(mapStateToProps)(Todos)