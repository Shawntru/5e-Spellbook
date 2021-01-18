import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import SpellCard from './SpellCard';

describe('SpellCard', () => {
  const spell = {
    index: 'burning-hands',
    name: 'Burning Hands',
    range: 'Self',
    duration: 'Instantaneous',
    casting_time: '1 action',
    level: 1,
    school: {
      index: 'evocation',
      name: 'Evocation',
      url: '/api/magic-schools/evocation',
    },
  };

  it('should render a spell name', () => {
    render(
      <MemoryRouter>
        <SpellCard spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Burning Hands')).toBeInTheDocument();
  });

  it('should render a spells level', () => {
    render(
      <MemoryRouter>
        <SpellCard spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Level 1')).toBeInTheDocument();
  });

  it('should render a spells school', () => {
    render(
      <MemoryRouter>
        <SpellCard spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Evocation')).toBeInTheDocument();
  });

  it('should render a spells casting time', () => {
    render(
      <MemoryRouter>
        <SpellCard spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Casting: 1 action')).toBeInTheDocument();
  });

  it('should render a spells range', () => {
    render(
      <MemoryRouter>
        <SpellCard spell={spell} />
      </MemoryRouter>
    );
    expect(screen.getByText('Range: Self')).toBeInTheDocument();
  });
});
