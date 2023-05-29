import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { UserConditions } from './UserConditions';

describe('UserConditions', () => {
  test('renders UserConditions component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<UserConditions />);
    expect(component).toMatchSnapshot();
  });

  test('search tag h3 decor', () => {
    render(<UserConditions />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });

  test('search tag h2 title', () => {
    render(<UserConditions />);
    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element).toBeInTheDocument();
  });
});
