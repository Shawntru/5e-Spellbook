import './Nav.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar-wrapper">
      <Link to={'/'} className="nav-link">
        Select a Class
      </Link>
      <Link className="nav-link" to={'/spellbook'}>
        Your Spell Book
      </Link>
    </nav>
  );
};

export default Nav;
