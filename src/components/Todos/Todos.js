import React from 'react';
import Todo from '../Todo/Todo';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

export function Todos(props) {
  // console.log(props, 'aaaaaaaaaaaaaaaa');
  return (
    <div>
      {
        props.todos.map(element => {
          return (
            <Link to={`/edit/${element.id}`} key={element.id}>
              {element.status === props.status ?
                <Todo title={element.title} /> : null
              }
            </Link>
          )
        })
      }
      <span>{props.status}</span>
    </div>
  )
};

function mapStateToProps(state) {
  // console.log(state, 'stateeeeeeeeeeeeeeeeeeeeeeeee');
  return {
    todos: state
  };
}
export default connect(mapStateToProps)(Todos)