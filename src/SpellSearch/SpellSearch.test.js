import React from 'react';
import { render, screen, act, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { fetchSpellDetails, fetchSpells } from '../APIcalls';
import SpellSearch from './SpellSearch';
import { spell } from '../TestingAssets/spells';
import userEvent from '@testing-library/user-event';

jest.mock('../APIcalls');

beforeEach(() => {
  fetchSpellDetails.mockResolvedValueOnce(spell);
  fetchSpells.mockResolvedValueOnce({ results: [{ index: 'burning-hands' }] });
});

describe('SpellSearch', () => {
  it('should render the search component', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <SpellSearch />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId('search-test')).toBeInTheDocument();
    });
  });

  it('should display a Spell Card for each spell fetched', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <SpellSearch />
        </MemoryRouter>
      );
    });

    await waitFor(() => {
      expect(screen.getByTestId('spellCard-burning-hands')).toBeInTheDocument();
    });
  });

  it('should show spell details when a spell card is clicked on', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <SpellSearch />
        </MemoryRouter>
      );
    });

    userEvent.click(screen.getByText('Burning Hands'));

    await waitFor(() => {
      expect(screen.getByTestId('details-test')).toBeInTheDocument();
    });
  });
});
