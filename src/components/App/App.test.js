import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/config/store';
import { App } from './App';

jest.mock('../../api/api', () => ({
  fetchMenu: jest.fn(),
  fetchNews: jest.fn(),
}));

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('App', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders App component', () => {
    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    // useSelector.mockReturnValue({ isLoading: false, error: null });

    const { container } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
