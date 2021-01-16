import './SpellBook.scss';
import React from 'react';
import { useEffect, useState } from 'react';
import * as API from '../APIcalls';
import SpellCard from '../SpellCard/SpellCard';
import SpellDetails from '../SpellDetails/SpellDetails';

const SpellBook = () => {
  const [spellBook, setSpellBook] = useState([]);

  useEffect(() => {
    let spellBookSpells = [];
    // debugger;
    Object.values(localStorage).forEach((spell) =>
      API.fetchSpellDetails(spell).then((data) => {
        spellBookSpells.push(data);
        if (localStorage.length === spellBookSpells.length) {
          setSpellBook(spellBookSpells);
        }
      })
    );
  }, []);

  return <h1>SpellBook</h1>;
};

export default SpellBook;
