import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { spell, spellMending } from '../TestingAssets/spells.js';

import SpellDetails from './SpellDetails';

describe('SpellCard', () => {
  it('should render a spell name', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Burning Hands')).toBeInTheDocument();
  });

  it('should render a spells level', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Level 1 -')).toBeInTheDocument();
  });

  it('should render a spells level as Cantrip if it is level 0', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spellMending} />
      </MemoryRouter>
    );
    expect(screen.getByText('Cantrip -')).toBeInTheDocument();
  });

  it('should render a spells school', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Evocation')).toBeInTheDocument();
  });

  it('should render a spells casting time', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Casting Time: 1 action')).toBeInTheDocument();
  });

  it('should render a spells range', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Range: Self')).toBeInTheDocument();
  });

  it('should render a spells area of effect', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('(15 ft cone)')).toBeInTheDocument();
  });

  it('should render a spells duration', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Duration: Instantaneous')).toBeInTheDocument();
  });

  it('should render a spells required materials, if there is any', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spellMending} />
      </MemoryRouter>
    );
    expect(screen.getByText('Materials: Two lodestones.')).toBeInTheDocument();
  });

  it('should render a spells relevant classes', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Sorcerer, Wizard')).toBeInTheDocument();
  });

  it('should render a spells components', () => {
    render(
      <MemoryRouter>
        <SpellDetails spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('VS')).toBeInTheDocument();
  });
});
