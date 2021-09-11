let todoId = 0;
let position = 1;

export function addTodo(title) {
  todoId++;
  position++;
  return {
    type: 'AddTodo',
    payload: {
      id: todoId,
      position: position,
      title: title,
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
