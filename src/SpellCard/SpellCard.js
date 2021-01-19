import './SpellCard.scss';
import React, { useState, useEffect } from 'react';
import plusIcon from '../assets/plus-icon.png';
import minusIcon from '../assets/minus-icon.png';
import PropTypes from 'prop-types';

const SpellCard = ({ spell }) => {
  const [icon, setIcon] = useState(null);
  const { name, level, school, casting_time, range } = spell;

  const modifySpellBook = (spell) => {
    Object.values(localStorage).includes(spell.index)
      ? localStorage.removeItem(`spell-book-${spell.index}`, spell.index)
      : localStorage.setItem(`spell-book-${spell.index}`, spell.index);
    selectIcon();
  };

  const selectIcon = () => {
    return Object.values(localStorage).includes(spell.index)
      ? setIcon(minusIcon)
      : setIcon(plusIcon);
  };

  useEffect(() => {
    selectIcon();
  });

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
        </div>
      </div>
      {icon && (
        <img
          onClick={() => modifySpellBook(spell)}
          src={icon}
          alt="add/remove button"
          className="plus-minus-icon"
        />
      )}
    </section>
  );
};

export default SpellCard;

SpellCard.propTypes = {
  name: PropTypes.string,
  range: PropTypes.string,
  casting_time: PropTypes.string,
  level: PropTypes.number,
  school: PropTypes.object,
};
