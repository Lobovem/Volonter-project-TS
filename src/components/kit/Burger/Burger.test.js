import { render, screen } from '@testing-library/react';
import { Burger } from './Burger';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from '../../../redux/config/store';

jest.mock('react-redux', () => {
  const originalModule = jest.requireActual('react-redux');
  return {
    ...originalModule,
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
  };
});

describe('Burger', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders app component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Burger />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should be burger element', () => {
    render(
      <Provider store={store}>
        <Router>
          <Burger />
        </Router>
      </Provider>
    );
    const burgerElement = screen.getByTestId('burger');
    expect(burgerElement).toBeInTheDocument();
  });

  test('should be burger line elements', () => {
    render(
      <Provider store={store}>
        <Router>
          <Burger />
        </Router>
      </Provider>
    );
    const burgerElementLine = screen.getAllByTestId('burger-line');
    expect(burgerElementLine).toHaveLength(3);
  });

  test('should be btn component with click', () => {
    const dispatch = jest.fn();
    const burgerState = false;

    useDispatch.mockReturnValue(dispatch);
    useSelector.mockReturnValue(burgerState);

    render(
      <Provider store={store}>
        <Router>
          <Burger />
        </Router>
      </Provider>
    );
    const burgerElement = screen.getByTestId('burger');
    expect(burgerElement).toBeInTheDocument();

    burgerElement.click();
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: 'content/changeBurgerState',
      payload: true,
    });
  });
});
