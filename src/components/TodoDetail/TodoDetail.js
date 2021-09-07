import React from 'react';
import { connect } from "react-redux";
import { toDone, toInProgress, removeTodo } from '../../actions/index.js';

function TodoDetail(props) {
  // const id = props.match.params.id
  let todo = props.todolist.find(item => item.id === props.match.params.id);
  return (
    <div>
      { todo !== undefined ?
        <>
          <button onClick={() => props.toDone(todo.id)}>Done</button>
          <button onClick={() => props.toInProgress(todo.id)}>In Progress</button>
          <button onClick={() => props.removeTodo(todo.id)}>Remove</button>
          <p>{todo.title}</p>
          <p>{todo.description}</p>
          <p>{todo.place}</p>
          <p>{todo.date}</p>
        </>
        :
        <h1>No hay todo.</h1>
      }
    </div>
  )
};
export default connect((state) => ({ todolist: state }), { toDone, toInProgress, removeTodo })(TodoDetail);