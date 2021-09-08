import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../actions';

export default function AddTodo() {
  const [title, setTitle] = React.useState('');
  const dispatch = useDispatch();

  function handleChange(e) { setTitle(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
    return title !== '' ? dispatch(addTodo(title)) : null
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="text" placeholder="..." onChange={handleChange} />
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={handleSubmit}>AddTodo</button>
      </form>
    </div>
  )
}