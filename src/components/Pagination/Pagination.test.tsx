import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';
import { Provider, useSelector } from 'react-redux';
import { store } from '../../redux/config/store';
import { BrowserRouter as Router } from 'react-router-dom';


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
    (useSelector as jest.Mock).mockReturnValue(data);
    const { container } = render(
    <Provider store={store}>
    <Router>
    <Pagination itemsPerPage={5}/>
    </Router>
  </Provider>);
  
    expect(container).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
        (useSelector as jest.Mock).mockReturnValue(data);
        render(
          <Provider store={store}>
          <Router>
          <Pagination itemsPerPage={5}/>
          </Router>
        </Provider>);

    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });

  test('search link btn (2 item)', () => {
        (useSelector as jest.Mock).mockReturnValue(data);
    render(
    <Provider store={store}>
    <Router>
    <Pagination itemsPerPage={5}/>
    </Router>
  </Provider>);

    const linkBtn = screen.getAllByRole('button');
    expect(linkBtn).toHaveLength(3);
  });
});
