const initialState = []

//En nuestro estado guardaremos objetos con `todos`. Cada todo tendra: title, description, place, date, id y un status;
const todos = (state = initialState, action) => {

  switch (action.type) {
    case "AddTodo":
      return [...state, { ...action.payload }]   // gaston version
    // {                    ====> asi lo tenia antes y no.
    //   ...state,
    //   state: state.concat(action.payload)
    // }

    case "RemoveTodo":
      return state.filter((element) => element.id !== action.payload)

    case 'ToInProgress':
      return state.map(element => {
        if (element.id === action.payload) {
          element.status = 'InProgress'
        }
        return element
      })

    case 'ToDone':
      return state.map(element => {
        if (element.id === action.payload) {
          element.status = 'Done'
        }
        return element
      })
    default:
      return state;
  }
}

export default todos;