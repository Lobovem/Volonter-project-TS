import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Teams } from './Teams';

describe('Teams', () => {
  test('renders Teams component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<Teams />);
    expect(component).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
    render(<Teams />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });
});
