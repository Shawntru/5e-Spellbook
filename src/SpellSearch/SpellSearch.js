import { useParams } from 'react-router-dom';
import './SpellSearch';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';

const SpellSearch = () => {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  const searchCriteria = useParams().pcClass;

  useEffect(() => {
    API.fetchSpells(searchCriteria).then((data) => setSpells(data.results));
  }, []);

  useEffect(() => {
    let returnedDetails = [];

    spells.forEach((spell) =>
      API.fetchSpellDetails(spell.index)
        .then((data) => returnedDetails.push(data))
        .then(() => {
          if (returnedDetails.length === spells.length) {
            setSpellDetails(returnedDetails);
          }
        })
    );
  }, [spells]);

  return <h1>Spell Search for {searchCriteria}</h1>;
};

export default SpellSearch;
