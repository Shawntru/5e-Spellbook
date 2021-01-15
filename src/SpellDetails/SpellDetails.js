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
  } = spell;
  return (
    <section>
      <h1>{name}</h1>
      {desc && <p>{desc}</p>}
      {higher_level && <p>{higher_level[0]}</p>}
      <p>{range}</p>
      <p>{components}</p>
      <p>{material}</p>
      {ritual && <p>Ritual</p>}
      <p>{duration}</p>
      {concentration && <p>Concentration</p>}
      {casting_time}
    </section>
  );
};

export default SpellDetails;
