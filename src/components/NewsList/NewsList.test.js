import { render, screen } from '@testing-library/react';
import { NewsList } from './NewsList';

describe('NewsList', () => {
  test('renders NewsList component', () => {
    const { container } = render(<NewsList />);
    expect(container).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
    render(<NewsList />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });
});
