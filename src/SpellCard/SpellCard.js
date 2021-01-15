import './SpellCard.scss';
import React from 'react';

const SpellCard = ({ spell }) => {
  return (
    <section>
      <h3 key={spell.index}>{spell.name}</h3>
      <p>
        {/* {() => {
          if (spell.level === 0) {
            return 'Cantrip';
          } else {
            return `<b>Level:</b> ${spell.level}`;
          }
        }} */}
      </p>
      <p>
        <b>School</b> {spell.school.name}
      </p>
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
