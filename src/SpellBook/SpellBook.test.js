import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import SpellBook from './SpellBook';
import { spell } from '../TestingAssets/spells';
import { fetchSpellDetails } from '../APIcalls';
jest.mock('../APIcalls');

beforeEach(() => {
  fetchSpellDetails.mockResolvedValueOnce(spell);
});

describe('SpellBook', () => {
  window.localStorage = {
    data: { spell: 'burning-hands' },
  };

  it('should render the Spellbook warning with no scrolls added', () => {
    render(
      <MemoryRouter>
        <SpellBook />
      </MemoryRouter>
    );
    expect(
      screen.getByText(
        'No scrolls collected yet. Go find some scrolls and add them to your Spell Book!'
      )
    ).toBeInTheDocument();
  });

  // it('should display local storage items as book pages', async () => {
  //   render(
  //     <MemoryRouter>
  //       <SpellBook />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText('Burning Hands')).toBeInTheDocument();
  //   });
  // });
});
