import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Breadcrumbs } from './Breadcrumbs';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/config/store';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('Breadcrumbs component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  test('renders Breadcrumbs component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Breadcrumbs />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders Breadcrumbs component with item', () => {
    const breadcrumbs = [
      {
        pathname: '/',
        breadcrumb: 'Home',
        path: '/',
      },
    ];

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue(breadcrumbs);

    render(
      <Provider store={store}>
        <Router>
          <Breadcrumbs />
        </Router>
      </Provider>
    );

    const element = screen.getByText('Home');
    expect(element).toBeInTheDocument();
  });
});
