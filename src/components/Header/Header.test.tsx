import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('Header` component', () => {
  test('renders Header component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders and search elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const phoneLinks = screen.getAllByRole('link'); // Search all links
    expect(phoneLinks).toHaveLength(3);
  });

  test('renders and search Header component with 1 images', () => {
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );
    const phoneLinks = screen.getAllByRole('img'); // Search all links
    expect(phoneLinks).toHaveLength(1);
  });
});
