import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterMenu } from './FooterMenu';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('FooterMenu` component', () => {
  test('renders FooterMenu component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <FooterMenu />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title (H2) component FooterMenu', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterMenu />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { level: 2 });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component FooterMenu', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterMenu />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /ПРО ФОНД/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders and search block of elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterMenu />
        </Router>
      </Provider>
    );
    const links = screen.getAllByRole('navigation'); // Search all links
    expect(links).toHaveLength(1);
  });
});
