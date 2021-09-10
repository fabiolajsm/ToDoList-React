import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';

export default function AddTodo() {
  const [title, setTitle] = React.useState('');
  const dispatch = useDispatch();

  function handleChange(e) { setTitle(e.target.value) }

  function handleSubmit(e) {
    e.preventDefault();
    if (title !== '') {
      dispatch(addTodo(title))
      setTitle("");
    }
  }

  return (
    <div>
      <form className="form-inline" onSubmit={handleSubmit}>
        <input className="form-control mr-sm-2" type="text" placeholder="..." value={title} onChange={handleChange} />
        <button className="btn btn-outline-secondary my-2 my-sm-0" onClick={handleSubmit}>AddTodo</button>
      </form>
    </div>
  )
}