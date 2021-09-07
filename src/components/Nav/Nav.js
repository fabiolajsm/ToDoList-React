import React from 'react';
import { Link } from 'react-router-dom';
import styles from './nav.module.css'

export function Nav() {
  return (
    <div className={styles.bg}>
      <nav class="navbar">
        <Link to='/' className="navbar-brand">TODOS</Link>
        <Link to='/add' className={styles.add}>Add Todo</Link>
      </nav>
    </div>
  )
};

export default Nav;