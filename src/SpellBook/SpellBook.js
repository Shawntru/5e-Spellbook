import './SpellBook.scss';
import React, { useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import SpellDetails from '../SpellDetails/SpellDetails';

const SpellBook = ({ spellBook }) => {
  const createSpellPage = () => {
    return spellBook.map((spell) => {
      return (
        <div number={spellBook.indexOf(spell) + 1}>
          <SpellDetails spell={spell} />
        </div>
      );
    });
  };

  if (spellBook.length > 0) {
    return (
      <HTMLFlipBook width={300} height={500}>
        {createSpellPage()}
      </HTMLFlipBook>
    );
  } else {
    return <h1>LOADING</h1>;
  }
};

export default SpellBook;
