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
  const [spellBook, setSpellBook] = useState([]);
  const searchCriteria = useParams().pcClass;

  const fetchAllClassSpells = () => {
    API.fetchSpells(searchCriteria).then((data) => {
      setSpells(data.results);
    });
  };

  const sortSpells = (spells) => {
    return spells.sort(
      (orderedSpell, spell) => orderedSpell.level - spell.level
      // || orderedSpell.name < spell.name
      //   ? 1
      //   : -1
    );
  };

  const loadSpellBookSpells = () => {
    let spellBookSpells = [];
    Object.values(localStorage).forEach((spell) =>
      API.fetchSpellDetails(spell).then((data) => {
        spellBookSpells.push(data);
        if (localStorage.length === spellBookSpells.length) {
          setSpellBook(sortSpells(spellBookSpells));
        }
      })
    );
  };

  useEffect(() => {
    if (searchCriteria === 'spellbook') {
      loadSpellBookSpells();
    } else {
      fetchAllClassSpells();
    }
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

  if (searchCriteria === 'spellbook') {
    return (
      <section className="search-wrapper">
        <h1>My Spell Book</h1>
        <div className="all-spell-wrapper">
          <div className="spell-details-wrapper">
            {displayedSpell && <SpellDetails spell={displayedSpell} />}
          </div>
          {spellBook && (
            <div className="spell-cards-wrapper">
              {spellBook.map((spell) => createSpellCard(spell))}
            </div>
          )}
        </div>
      </section>
    );
  } else {
    return (
      <section className="search-wrapper">
        <h1>
          Spell Scrolls for{' '}
          {searchCriteria.charAt(0).toUpperCase() + searchCriteria.slice(1)}
        </h1>
        <div className="all-spell-wrapper">
          {spellDetails && (
            <div className="spell-cards-wrapper">
              {spellDetails.map((spell) => createSpellCard(spell))}
            </div>
          )}
          <div className="spell-details-wrapper">
            {displayedSpell && <SpellDetails spell={displayedSpell} />}
          </div>
        </div>
      </section>
    );
  }
};

export default SpellSearch;
