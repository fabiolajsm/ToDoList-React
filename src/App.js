import React from 'react'
import { Route, BrowserRouter } from "react-router-dom";
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';

export function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    </>
  );
}

export default App;