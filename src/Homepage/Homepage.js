import React from 'react';
import './Homepage.scss';
import { Link } from 'react-router-dom';

const Homepage = () => {
  const pcClasses = [
    'bard',
    'cleric',
    'druid',
    'paladin',
    'ranger',
    'sorcerer',
    'warlock',
    'wizard',
  ];

  const createPcClassLink = (pcClass) => {
    return (
      <Link
        to={`/spells/${pcClass}`}
        key={pcClass}
        className="class-card-wrapper"
      >
        <div className="leather-background">
          <h1>{pcClass.charAt(0).toUpperCase() + pcClass.slice(1)}</h1>
        </div>
      </Link>
    );
  };

  return (
    <section className="homepage-wrapper">
      <h3 className="homepage-header">Search for Spells by Class:</h3>
      <div className="all-classes-wrapper">
        {pcClasses.map((pcClass) => createPcClassLink(pcClass))}{' '}
        <Link className="class-card-wrapper" to={'/spellbook'}>
          <h1>Go To Spell Book</h1>
        </Link>
      </div>
    </section>
  );
};

export default Homepage;
