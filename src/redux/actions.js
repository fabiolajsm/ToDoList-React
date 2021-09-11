let todoId = 0;
let position = 1;

export function addTodo(task) {
  todoId++;
  position++;
  return {
    type: 'AddTodo',
    payload: {
      id: todoId,
      position: position,
      task: task,
      status: 'Todo',
    },
  };
}

export function removeTodo(payload) {
  todoId--;
  position--;
  return {
    type: 'RemoveTodo',
    payload: payload,
  };
}

export function editTodo(payload) {
  return {
    type: 'EditTodo',
    payload: payload, // id and text
  };
}