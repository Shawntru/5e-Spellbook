import './SpellCard.scss';
import React from 'react';
import plusIcon from '../assets/plus-icon.png';

const SpellCard = ({ spell }) => {
  const { index, name, level, school, casting_time, range, damage } = spell;

  const addToSpellBook = () => {
    localStorage.setItem(`spell-book-${spell.index}`, spell.index);
  };

  return (
    <section className="solo-card-wrapper">
      <h3 className="card-spell-name">{name}</h3>
      <div className="solo-card-details">
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
        {damage && (
          <div>{damage.damage_type && <p>{damage.damage_type.name}</p>}</div>
        )}
        {/* {area_of_effect && <p>{console.log(spell)}</p>} */}
        <img
          src={plusIcon}
          alt="add button"
          className="plus-icon"
          onClick={() => addToSpellBook()}
        />
      </div>
    </section>
  );
};

export default SpellCard;
