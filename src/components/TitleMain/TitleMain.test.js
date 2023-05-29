import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TitleMain } from './TitleMain';

describe('TitleMain', () => {
  test('renders TitleMain component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<TitleMain />);
    expect(component).toMatchSnapshot();
  });

  test('search tag h2 title', () => {
    render(<TitleMain />);
    const h3Element = screen.getByRole('heading', { level: 2 });
    expect(h3Element).toBeInTheDocument();
  });

  test('search text tag h2 title', () => {
    const title = 'Title';

    render(<TitleMain title={title} />);
    const titleElem = screen.getByRole('heading', { name: /title/i });
    expect(titleElem).toBeInTheDocument();
  });
});
