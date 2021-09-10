const initialState = [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'AddTodo':
      return [...state, { ...action.payload }]
    case 'RemoveTodo':
      return state.filter((element) => element.id !== action.payload)
    default:
      return state;
  }
}

export default todos;