import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css'
import AddTodo from '../AddTodo/AddTodo';

export function Nav() {
  return (
    <div className={styles.bg}>
      <nav className="navbar">
        <Link to='/' className="navbar-brand">Just do it</Link>
        <span className={styles.add}><AddTodo /></span>
      </nav>
    </div>
  )
};

export default Nav;