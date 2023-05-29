import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { FooterContacts } from './FooterContacts';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('FooterContacts` component', () => {
  test('renders FooterContacts component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <FooterContacts />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title component contacts', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterContacts />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /КОНТАКТИ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders and search elements links', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterContacts />
        </Router>
      </Provider>
    );
    const phoneLinks = screen.getAllByRole('link'); // Search all links
    expect(phoneLinks).toHaveLength(3);

    const phoneLink1 = screen.getByText('+380 (63)-049-40-02'); // Search link about text
    expect(phoneLink1).toBeInTheDocument(); // Check out link in DOM

    const phoneLink2 = screen.getByText('+380 (67)-159-73-73');
    expect(phoneLink2).toBeInTheDocument();

    const addressLink = screen.getByRole('link', { name: /м\. Харків/i }); // Search link about text
    expect(addressLink).toBeInTheDocument(); // Check out link in DOM
  });

  test('renders FooterContacts component with 2 images (link elements)', () => {
    render(
      <Provider store={store}>
        <Router>
          <FooterContacts />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(2);
  });
});
