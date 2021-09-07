import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";

import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import AddTodo from './components/AddTodo/AddTodo';
import Todos from './components/Todos/Todos.js';
import Todo from './components/Todo/Todo.js';
import TodoDetail from './components/TodoDetail/TodoDetail';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route exact path="/edit/:id" render={({ match }) => <TodoDetail match={match} />} />
        <Route exact path='/todos' component={Todos} />
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/add' component={AddTodo} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;