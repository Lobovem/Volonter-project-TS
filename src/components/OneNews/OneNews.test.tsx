import { render, screen } from '@testing-library/react';
import { OneNews } from './OneNews';
import { useDispatch, useSelector } from 'react-redux';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('OneNews', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  const dispatch = jest.fn();
  const oneNews = { id: 1, title: 'Новина', desc: 'News' };

  test('renders OneNews component', () => {
    (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue(oneNews);

    const { container } = render(<OneNews />);
    expect(container).toMatchSnapshot();
  });

  test('renders the title correctly', () => {
   (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue(oneNews);

    render(<OneNews />);
    const titleElement = screen.getByText('Новина');
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the "Новини" heading', () => {
   (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue(oneNews);

    render(<OneNews />);
    const h3Element = screen.getByRole('heading', { name: 'Новини' });
    expect(h3Element).toBeInTheDocument();
  });

  test('renders the description correctly', () => {
   (useDispatch as jest.Mock).mockReturnValue(dispatch);
    (useSelector as jest.Mock).mockReturnValue(oneNews);

    render(<OneNews />);
    const descElement = screen.getByText('News');
    expect(descElement).toBeInTheDocument();
  });
});
