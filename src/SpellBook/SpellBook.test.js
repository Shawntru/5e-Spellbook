import React from 'react';
import { render, screen } from '@testing-library/react';
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

  it('should render the Spellbook component', () => {
    render(
      <MemoryRouter>
        <SpellBook />
      </MemoryRouter>
    );
    expect(screen.getByTestId('spellbook-test')).toBeInTheDocument();
  });

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
});
