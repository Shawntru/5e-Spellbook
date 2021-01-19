import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import Nav from './Nav';

describe('Nav', () => {
  it('should render the nav component', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByTestId('nav-bar-test')).toBeInTheDocument();
  });

  it('should contain a link to class selection', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /Select a Class/i })
    ).toBeInTheDocument();
  });

  it('should contain a link to spell book', () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('link', { name: /Your Spell Book/i })
    ).toBeInTheDocument();
  });
});
