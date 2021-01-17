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
  const [displayedSpell, setDisplayedSpell] = useState(null);
  const searchCriteria = useParams().pcClass;
  
  const fetchAllClassSpells = () => {
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
    <section className="search-wrapper">
      <div className="all-spell-wrapper">
        {spellDetails && (
          <div className="spell-cards-wrapper">
            <h1 className="search-criteria-title">
              Spell Scrolls for{' '}
              {searchCriteria.charAt(0).toUpperCase() + searchCriteria.slice(1)}
            </h1>
            {spellDetails.map((spell) => createSpellCard(spell))}{' '}
          </div>
        )}
        <div className="spell-details-wrapper">
          {displayedSpell && (
            <SpellDetails spell={displayedSpell} view="scroll" />
          )}
          <div className="spell-details-wrapper">
            {displayedSpell && (
              <SpellDetails spell={displayedSpell} view="scroll" />
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default SpellSearch;
