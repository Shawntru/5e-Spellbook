import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const pcClasses = [
    'barbarian',
    'bard',
    'cleric',
    'druid',
    'fighter',
    'monk',
    'paladin',
    'ranger',
    'rogue',
    'sorcerer',
    'warlock',
    'wizard',
  ];

  const createPcClassLink = (pcClass) => {
    return (
      <div>
        <Link to={`/spells/${pcClass}`}>
          {pcClass.charAt(0).toUpperCase() + pcClass.slice(1)}
        </Link>
      </div>
    );
  };

  return (
    <section>
      <h1>The Dusty Tome</h1>
      <div>{pcClasses.map((pcClass) => createPcClassLink(pcClass))}</div>
    </section>
  );
};

export default Homepage;
