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
    <section className="spell-details-internal-wrapper">
      <h1>{name}</h1>
      {level === 0 && <p>Cantrip</p>}
      {level > 0 && <p>Level {level}</p>}
      {school && <p>{school.name}</p>}
      {classes && <p>{showReleventClasses(classes)}</p>}
      {desc && <p>{desc.join(' ')}</p>}
      <div>
        <h4>Range:</h4> <p>{range}</p>
        {area_of_effect && (
          <p>
            ({area_of_effect.size} ft {area_of_effect.type})
          </p>
        )}
      </div>
      <div>
        <h4>Components:</h4> <p>{components}</p>
      </div>
      <p>{material}</p>
      {ritual && <p>Ritual</p>}
      <div>
        <h4>Duration:</h4> <p>{duration}</p>
      </div>
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
              {
                // TODO: Add Quick reference for saving throws
              }
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default SpellDetails;
