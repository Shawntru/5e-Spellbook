/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import './SpellSearch';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';
import SpellCard from '../SpellCard/SpellCard';

const SpellSearch = () => {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  const searchCriteria = useParams().pcClass;

  useEffect(() => {
    API.fetchSpells(searchCriteria).then((data) => {
      setSpells(data.results);
    });
  }, []);

  useEffect(() => {
    let returnedDetails = [];

    spells.forEach((spell) =>
      API.fetchSpellDetails(spell.index).then((data) => {
        returnedDetails.push(data);
        if (returnedDetails.length === spells.length) {
          setSpellDetails(returnedDetails);
        }
      })
    );
  }, [spells]);

  const createSpellCard = (spell) => {
    return <SpellCard key={spell.index} spell={spell} />;
  };

  return (
    <section>
      <h1>Spell Search for {searchCriteria}</h1>
      {spellDetails && (
        <div>{spellDetails.map((spell) => createSpellCard(spell))}</div>
      )}
    </section>
  );
};

export default SpellSearch;
