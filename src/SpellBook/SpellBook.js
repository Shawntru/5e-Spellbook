import './SpellBook.scss';
import React, { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import SpellDetails from '../SpellDetails/SpellDetails';

const PageCover = React.forwardRef(() => {
  return <div className="page page-cover">Spell Cover</div>;
});

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
          <PageCover>Spells</PageCover>
          {createSpellPage()}
        </HTMLFlipBook>
      </div>
    </section>
  );
};

export default SpellBook;
