import { render, screen } from '@testing-library/react';
import { PageError } from '../PageError/PageError';
import { MemoryRouter } from 'react-router-dom';

describe('PageError', () => {
  test('renders PageError component', () => {
    const { container } = render(
      <MemoryRouter>
        <PageError />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });

  test('search title tag h1 with text 404', () => {
    render(
      <MemoryRouter>
        <PageError />
      </MemoryRouter>
    );
    const h1Element = screen.getByRole('heading', { name: /404/i });
    expect(h1Element).toBeInTheDocument();
  });

  test('renders and search component button', () => {
    render(
      <MemoryRouter>
        <PageError />
      </MemoryRouter>
    );
    const buttonElement = screen.getByRole('button', { type: 'button' });
    expect(buttonElement).toBeInTheDocument();
  });
});
