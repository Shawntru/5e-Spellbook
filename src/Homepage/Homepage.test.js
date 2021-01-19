import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Homepage from './Homepage.js';

describe('Homepage', () => {
  it('should render the homepage view', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByTestId('homepage-test')).toBeInTheDocument();
  });

  it('should render a link for each class', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(screen.getByRole('link', { name: /bard/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /cleric/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /druid/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /paladin/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /ranger/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /sorcerer/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /warlock/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /wizard/i })).toBeInTheDocument();
  });

  it('should render a link to the spellbook', () => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /Go To Spell Book/i })
    ).toBeInTheDocument();
  });
});
