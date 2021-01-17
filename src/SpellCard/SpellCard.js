import './SpellCard.scss';
import React from 'react';
import plusIcon from '../assets/plus-icon.png';
import minusIcon from '../assets/minus-icon.png';

const SpellCard = ({ spell }) => {
  const { name, level, school, casting_time, range, damage } = spell;

  const modifySpellBook = (spell) => {
    Object.values(localStorage).includes(spell.index)
      ? localStorage.removeItem(`spell-book-${spell.index}`, spell.index)
      : localStorage.setItem(`spell-book-${spell.index}`, spell.index);
  };

  const selectIcon = () => {
    return Object.values(localStorage).includes(spell.index)
      ? minusIcon
      : plusIcon;
  };

  return (
    <section className="solo-card-wrapper">
      <div>
        <h3 className="card-spell-name">{name}</h3>
        <div className="solo-card-details">
          {level === 0 && <h4>Cantrip</h4>}
          {level > 0 && <h4>Level {level}</h4>}
          <h4>{school.name}</h4>
          <h4>Casting: {casting_time}</h4>
          <h4>Range: {range}</h4>
          {damage && (
            <div>
              {damage.damage_type && <h4>({damage.damage_type.name})</h4>}
            </div>
          )}
        </div>
      </div>
      <img
        src={selectIcon()}
        alt="add/remove button"
        className="plus-minus-icon"
        onClick={() => modifySpellBook(spell)}
      />{' '}
    </section>
  );
};

export default SpellCard;
