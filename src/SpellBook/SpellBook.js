import './SpellBook.scss';
import React, { useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import SpellDetails from '../SpellDetails/SpellDetails';
import * as API from '../APIcalls';

const SpellBook = () => {
  const [spellBook, setSpellBook] = useState([]);

  const createSpellPage = () => {
    return spellBook.map((spell) => {
      return (
        <div
          number={spellBook.indexOf(spell) + 1}
          className="page"
          key={spellBook.index}
        >
          <SpellDetails spell={spell} />
        </div>
      );
    });
  };

  const sortSpells = (spells) => {
    return spells.sort(
      (orderedSpell, spell) => orderedSpell.level - spell.level
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
    loadSpellBookSpells();
  }, []);

  if (!spellBook.length) {
    return (
      <section className="warning-wrapper">
        <div className="no-scrolls-warning">
          <h1>
            No scrolls collected yet. Go find some scrolls and add them to your
            Spell Book!
          </h1>
        </div>
      </section>
    );
  } else {
    return (
      <section className="spell-book-view-wrapper">
        <div className="spellbook-wrapper">
          <HTMLFlipBook
            width={550}
            height={733}
            size="stretch"
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1533}
            maxShadowOpacity={0.5}
            showCover={true}
          >
            <div className="book-cover" number={0}></div>
            {createSpellPage()}
            <div className="page" number={0}></div>
          </HTMLFlipBook>
        </div>
      </section>
    );
  }
};

export default SpellBook;
