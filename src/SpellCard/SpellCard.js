import './SpellCard.scss';
import React from 'react';

const SpellCard = ({ spell }) => {
  return (
    <section className="card-wrapper">
      <h3 key={spell.index}>{spell.name}</h3>
      {spell.level === 0 && <p>Cantrip</p>}
      {spell.level > 0 && (
        <p>
          <b>Level</b> {spell.level}
        </p>
      )}
      <p>{spell.school.name}</p>
      <p>
        <b>Casting Time</b> {spell.casting_time}
      </p>
      <p>
        <b>Range</b> {spell.range}
      </p>
      {/* {spell.damage && (
        <p>
          <b>Damage Type</b> {spell.damage.damage_type.name}
        </p>
      )} */}
    </section>
  );
};

export default SpellCard;
