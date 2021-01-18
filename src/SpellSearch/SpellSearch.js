/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from 'react-router-dom';
import './SpellSearch.scss';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';
import SpellCard from '../SpellCard/SpellCard';
import SpellDetails from '../SpellDetails/SpellDetails';

const SpellSearch = () => {
  const [spells, setSpells] = useState([]);
  const [spellDetails, setSpellDetails] = useState(null);
  const [displayedSpell, setDisplayedSpell] = useState(null);
  const searchCriteria = useParams().pcClass;

  const fetchListOfClassSpells = () => {
    API.fetchSpells(searchCriteria).then((data) => {
      setSpells(data.results);
    });
  };

  const fetchClassSpellDetails = () => {
    let returnedDetails = [];
    spells.forEach((spell) =>
      API.fetchSpellDetails(spell.index).then((data) => {
        returnedDetails.push(data);
        if (returnedDetails.length === spells.length) {
          setSpellDetails(returnedDetails);
        }
      })
    );
  };

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

  useEffect(() => {
    fetchListOfClassSpells();
  }, []);

  useEffect(() => {
    fetchClassSpellDetails();
  }, [spells]);

  return (
    <section className="all-spell-wrapper">
      {spellDetails && (
        <div className="search-results-wrapper">
          <h1 className="search-criteria-title">
            Spell Scrolls for{' '}
            {searchCriteria.charAt(0).toUpperCase() + searchCriteria.slice(1)} (
            {spellDetails.length} Spells)
          </h1>
          <div className="spell-cards-wrapper">
            {spellDetails.map((spell) => createSpellCard(spell))}{' '}
          </div>
        </div>
      )}
      <div className="spell-details-wrapper">
        {displayedSpell && (
          <SpellDetails spell={displayedSpell} view="scroll" />
        )}
        {!displayedSpell && spellDetails && (
          <div className="click-message">
            <h1>
              Click a spell scroll on the left to open it. Use the " + / - " to
              add or remove a spell from your Spell Book.{' '}
            </h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default SpellSearch;
