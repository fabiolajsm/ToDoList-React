let todoId = 0;

export function addTodo(title) {
    todoId++;
    return {
        type: 'AddTodo',
        payload: {
            id: todoId,
            title: title,
            status: 'Todo',
        }
    }
}

export function removeTodo(payload) {
    todoId--;
    return {
        type: 'RemoveTodo',
        payload: payload
    }
}