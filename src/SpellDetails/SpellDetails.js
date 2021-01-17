import './SpellDetails.scss';
import React from 'react';
import scrollImg from '../assets/scroll-backdrop.png';

const SpellDetails = ({ spell, view }) => {
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
    school,
    classes,
    area_of_effect,
    // damage,
  } = spell;
  let styling = {};

  // const showDamageAtLevel = (levels) => {
  //   return Object.entries(levels)
  //     .map((level) => level.join(' - '))
  //     .join('; ');
  // };

  const showReleventClasses = (classes) => {
    return classes.map((school) => school.name).join(', ');
  };

  if (view === 'scroll') {
    styling = {
      backgroundImage: `url(${scrollImg})`,
      padding: '5em 6em 7em 6em',
    };
  } else {
    styling = {
      padding: '2.5em',
      height: '100vh',
    };
  }

  return (
    <section className="spell-details-internal-wrapper" style={styling}>
      <h2 className="spell-detail-title">{name}</h2>
      <div className="same-group">
        <div className="same-level">
          {level === 0 && <h4>Cantrip - </h4>}
          {level > 0 && <h4>Level {level} - </h4>}
          {school && <h4>{school.name}</h4>}
        </div>
        <div className="same-level">
          {ritual && <h3>R</h3>}
          {ritual && concentration && <h4>- </h4>}
          {concentration && <h3>C</h3>}
        </div>
      </div>
      <div className="same-group">
        <div className="same-level">
          <h4>Range: {range}</h4>
          {area_of_effect && (
            <h4>
              ({area_of_effect.size} ft {area_of_effect.type})
            </h4>
          )}
        </div>
        <h4>{components}</h4>
      </div>
      <h4>Casting Time: {casting_time}</h4>
      <h4>Duration: {duration}</h4>
      {material && <p>Materials: {material}</p>}
      {classes && <p>{showReleventClasses(classes)}</p>}
      <div className="desc-wrapper">
        {desc && <p>{desc.join(' ')}</p>}
        {higher_level && <p>At Higher Levels: {higher_level.join(' ')}</p>}
      </div>
      {/* {damage && (
        <div>
          <p>Damage Type: {damage.damage_type.name}</p>
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
      )} */}
    </section>
  );
};

export default SpellDetails;
