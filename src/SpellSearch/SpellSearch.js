/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import './SpellSearch.scss';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';
import SpellCard from '../SpellCard/SpellCard';
import SpellDetails from '../SpellDetails/SpellDetails';

const SpellSearch = () => {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState([]);
  const [displayedSpell, setDisplayedSpell] = useState({});
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
    return (
      <div
        key={spell.index}
        onClick={() => {
          setDisplayedSpell(spell);
        }}
      >
        <SpellCard spell={spell} />
      </div>
    );
  };

  return (
    <section>
      <h1>Spell Search for {searchCriteria}</h1>
      <div className="all-spell-wrapper">
        {spellDetails && (
          <div className="spell-cards-wrapper">
            {spellDetails.map((spell) => createSpellCard(spell))}
          </div>
        )}
        <div className="spell-detail-wrapper">
          <SpellDetails spell={displayedSpell} />
        </div>
      </div>
    </section>
  );
};

export default SpellSearch;
