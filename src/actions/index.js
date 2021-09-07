// Podes usar esta variable para generar un ID por cada Todo.
let todoId = 0 // aqui antes lo tenia en 1

export function addTodo(payload) {
    // console.log(payload, 'entrrrrrrrrrrrreeeeee');
    // return {   ===> este era el que tenia y no pasa
    //     type: 'AddTodo',
    //     payload: {
    //         title: payload.title,
    //         status: 'Todo',
    //         id: todoId++  // aqui lo aumento para que sea unico.
    //     }
    // }
    todoId++;
    return {
        type: 'AddTodo',
        payload: {
            title: payload.title,
            status: 'Todo',
            id: todoId,
            place: payload.place,
            date: payload.date,
            description: payload.description
        }
    }
}

export function removeTodo(payload) {
    todoId--;  // aqui el le agrego esto, clever.
    return {
        type: 'RemoveTodo',
        payload: payload
    }
}

export function toInProgress(payload) {
    return {
        type: 'ToInProgress',
        payload: payload
    }
}

export function toDone(payload) {
    return {
        type: 'ToDone',
        payload: payload
    }
}