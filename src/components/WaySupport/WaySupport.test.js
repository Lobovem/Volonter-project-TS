import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { WaySupport } from './WaySupport';

describe('WaySupport', () => {
  test('renders WaySupport component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<WaySupport />);
    expect(component).toMatchSnapshot();
  });

  test('search tag h3 decor', () => {
    render(<WaySupport />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });
});
