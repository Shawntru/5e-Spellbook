import './SpellBook.scss';
import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import SpellDetails from '../SpellDetails/SpellDetails';

const SpellBook = ({ spellBook }) => {
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
