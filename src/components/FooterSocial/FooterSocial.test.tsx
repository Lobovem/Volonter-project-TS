import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterSocial } from './FooterSocial';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('FooterSocial` component', () => {
  test('renders FooterSocial component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title (H2) component social', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { level: 2 });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component social', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /СОЦІАЛЬНІ МЕРЕЖІ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders FooterSocial component with 2 images (link elements)', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });

  test('renders and search elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterSocial />
        </Router>
      </Provider>
    );
    const links = screen.getAllByRole('link'); // Search all links
    expect(links).toHaveLength(2);

    const linkSocial1 = screen.getByText('instagram'); // Search link about text
    expect(linkSocial1).toBeInTheDocument(); // Check out link in DOM

    const linkSocial2 = screen.getByText('facebook');
    expect(linkSocial2).toBeInTheDocument();
  });
});
