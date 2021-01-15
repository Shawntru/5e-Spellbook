import './SpellCard.scss';
import React from 'react';

const SpellCard = ({ spell }) => {
  const { index, name, level, school, casting_time, range } = spell;

  return (
    <section className="solo-card-wrapper">
      <h3 key={index}>{name}</h3>
      {level === 0 && <p>Cantrip</p>}
      {level > 0 && (
        <p>
          <b>Level</b> {level}
        </p>
      )}
      <p>{school.name}</p>
      <p>
        <b>Casting Time</b> {casting_time}
      </p>
      <p>
        <b>Range</b> {range}
      </p>
    </section>
  );
};

export default SpellCard;
