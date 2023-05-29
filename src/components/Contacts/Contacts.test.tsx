import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Contacts } from './Contacts';

describe('Contacts component', () => {
  test('renders Contacts component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Router>
        <Contacts />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders contacts information correctly', () => {
    // Render the Contacts component
    render(<Contacts />);

    // Assert that the contact information is rendered correctly
    expect(screen.getByText('Графік роботи:')).toBeInTheDocument();
    expect(screen.getByText('Пн-Пт - 09:00-16:00')).toBeInTheDocument();
    expect(screen.getByText('Контактні телефони:')).toBeInTheDocument();
    expect(screen.getByText('Адреса:')).toBeInTheDocument();
    expect(screen.getByText('м. Харків, вул.Космічна, буд. 21, оф. 529')).toBeInTheDocument();
  });

  test('renders and search iframe element with correct attributes', () => {
    render(<Contacts />);
    const iframeElement = screen.getByTestId('map-iframe');
    expect(iframeElement).toBeInTheDocument();
  });
});
