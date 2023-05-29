import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { useSelector } from 'react-redux';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('Pagination', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const data = [{ id: 1, title: 'Новина', desc: 'News' }];

  test('renders Pagination component', () => {
    useSelector.mockReturnValue(data);

    const { container } = render(<Pagination />);
    expect(container).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
    useSelector.mockReturnValue(data);

    render(<Pagination />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });

  test('search link btn (2 item)', () => {
    useSelector.mockReturnValue(data);

    render(<Pagination />);
    const linkBtn = screen.getAllByRole('button');
    expect(linkBtn).toHaveLength(2);
  });
});
