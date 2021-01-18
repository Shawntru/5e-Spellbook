import './SpellBook.scss';
import React, { useEffect, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import SpellDetails from '../SpellDetails/SpellDetails';
import * as API from '../APIcalls';

const SpellBook = () => {
  const [spellBook, setSpellBook] = useState([]);

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

  const createSpellBookIndex = () => {
    return spellBook.map((spell) => {
      return (
        <div key={spell.index}>
          <h4>
            [{spell.level > 0 && spell.level}
            {spell.level === 0 && 'C'}] {spell.name}
          </h4>
        </div>
      );
    });
  };

  const createSpellPages = () => {
    return spellBook.map((spell) => {
      return (
        <div
          className="page"
          key={spell.index}
          number={spellBook.indexOf(spell) + 1}
        >
          <SpellDetails spell={spell} />
        </div>
      );
    });
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
        <div className="spellbook-index-wrapper">
          <h2 className="spell-index-title">Spell Index</h2>
          <div>{createSpellBookIndex()}</div>
        </div>
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
            {createSpellPages()}
            <div className="page" number={0}></div>
          </HTMLFlipBook>
        </div>
      </section>
    );
  }
};

export default SpellBook;
