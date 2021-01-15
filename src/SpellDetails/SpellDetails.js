import './SpellDetails.scss';
import React from 'react';

const SpellDetails = ({ spell }) => {
  const {
    name,
    desc,
    higher_level,
    range,
    components,
    material,
    ritual,
    duration,
    concentration,
    casting_time,
    level,
    damage,
    school,
    classes,
    area_of_effect,
  } = spell;

  const showDamageAtLevel = (levels) => {
    return Object.entries(levels)
      .map((level) => level.join(' - '))
      .join('; ');
  };

  const showReleventClasses = (classes) => {
    return classes.map((school) => school.name).join(', ');
  };

  return (
    <section>
      <h1>{name}</h1>
      {level === 0 && <p>Cantrip</p>}
      {level > 0 && <p>Level {level}</p>}
      {school && <p>{school.name}</p>}
      {classes && <p>{showReleventClasses(classes)}</p>}
      {desc && <p>{desc.join(' ')}</p>}
      <div>
        <p>
          <b>Range:</b> {range}{' '}
        </p>
        {area_of_effect && (
          <p>
            ({area_of_effect.size} ft {area_of_effect.type})
          </p>
        )}
      </div>
      <p>
        <b>Components:</b> {components}
      </p>
      <p>{material}</p>
      {ritual && <p>Ritual</p>}
      <p>
        <b>Duration:</b> {duration}
      </p>
      {concentration && <p>Concentration</p>}
      <p>{casting_time}</p>
      {higher_level && <p>{higher_level.join(' ')}</p>}
      {damage && (
        <div>
          <p>{damage.damage_type.name}</p>
          {damage.damage_at_slot_level && (
            <p>
              (Quick reference: Level{' '}
              {showDamageAtLevel(damage.damage_at_slot_level)})
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default SpellDetails;
