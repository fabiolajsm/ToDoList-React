import React from 'react';
import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <div className="navbar navbar-dark bg-dark">
      <nav className="navbar">
        <Link to='/' className="navbar-brand">To Do List</Link>
      </nav>
    </div>
  )
};

export default Nav;