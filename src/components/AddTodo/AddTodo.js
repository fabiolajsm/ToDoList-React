import React from 'react';
import { addTodo } from '../../actions'
import { connect } from 'react-redux'
// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store. 
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {
  const [input, setInput] = React.useState({
    title: '',
    description: '',
    place: '',
    date: ''
  })

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTodo(input);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name='title' value={input.title} onChange={handleChange} />

        <label>Description</label>
        <textarea name="description" value={input.description} onChange={handleChange}></textarea>

        <label>Place</label>
        <input name="place" value={input.place} onChange={handleChange} />

        <label>Date</label>
        <input name="date" value={input.date} onChange={handleChange} />

        <button type="submit"></button>
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    info: state
  };
}

export default connect(mapStateToProps, { addTodo })(AddTodo);