import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Menu } from './Menu';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('Menu` component', () => {
  test('renders Menu component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders and search block of elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <Menu />
        </Router>
      </Provider>
    );
    const links = screen.getAllByRole('navigation'); // Search all links
    expect(links).toHaveLength(1);
  });
});
