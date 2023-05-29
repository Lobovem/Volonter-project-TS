import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './Footer';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('Footer component', () => {
  test('renders Footer component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title component menu', () => {
    render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /ПРО ФОНД/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component contacts', () => {
    render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /КОНТАКТИ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component social', () => {
    render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /СОЦІАЛЬНІ МЕРЕЖІ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders and search component button', () => {
    render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    const buttonElement = screen.getByRole('button', { type: 'button' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders Footer component with 5 images of component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(5);
  });
});
