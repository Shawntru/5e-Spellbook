import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { fetchSpellDetails, fetchSpells } from '../APIcalls';
import { spell } from '../TestingAssets/spells';
import userEvent from '@testing-library/user-event';
import App from './App';
jest.mock('../APIcalls');

beforeEach(() => {
  fetchSpellDetails.mockResolvedValueOnce(spell);
  fetchSpells.mockResolvedValueOnce({ results: [{ index: 'burning-hands' }] });
});

describe('App', () => {
  it('should render the Nav component', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('nav-bar-test')).toBeInTheDocument();
  });

  it('should handle path to main page', async () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByTestId('homepage-test')).toBeInTheDocument();
    });
  });

  it('should handle path to spell search page', async () => {
    const history = createMemoryHistory();
    history.push('/spells/bard');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByTestId('search-test')).toBeInTheDocument();
    });
  });

  it('should handle path to spell book page', async () => {
    const history = createMemoryHistory();
    history.push('/spellbook');
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    await waitFor(() => {
      expect(screen.getByTestId('spellbook-test')).toBeInTheDocument();
    });
  });
});

// INTEGRATION TESTING

describe('Homepage navigation interaction', () => {
  it('should navigate to the spell search view when a class is clicked on', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    userEvent.click(screen.getByText('Bard'));

    await waitFor(() => {
      expect(screen.getByTestId('search-test')).toBeInTheDocument();
    });
  });
});
