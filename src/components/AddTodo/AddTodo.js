import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';

export default function AddTodo() {
  const [task, setTask] = React.useState('');
  const dispatch = useDispatch();

  function handleChange(e) { setTask(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
    if (task !== '') {
      dispatch(addTodo(task))
      setTask("");
    }
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="text" placeholder="Write your task..." value={task} onChange={handleChange} />
        <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  )
}