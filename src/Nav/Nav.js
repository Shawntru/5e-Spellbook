import './Nav.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="nav-bar-wrapper" data-testid="nav-bar-test">
      <div className="nav-underline-wrapper">
        <div className="gold-left"></div>
        <Link to={'/5e-spellbook'} className="nav-link">
          <h3>Select a Class</h3>
        </Link>
        <h2 className="site-title">The Dusty Tome</h2>
        <Link className="nav-link" to={'/spellbook'}>
          <h3>Your Spell Book</h3>
        </Link>
        <div className="gold-right"></div>
      </div>
    </nav>
  );
};

export default Nav;
