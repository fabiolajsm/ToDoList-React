const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'AddTodo':
      return [...state, { ...action.payload }]
    case 'RemoveTodo':
      return state.filter((element) => element.id !== action.payload)
    case 'EditTodo':
      return state.map(element => {
        if (element.id === action.payload.id) {
          element.task = action.payload.task
        }
        return element
      })
    default:
      return state;
  }
}

export default todos;