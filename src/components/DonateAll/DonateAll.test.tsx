import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DonateAll } from './DonateAll';

describe('DonateAll component', () => {
  test('renders DonateAll component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Router>
        <DonateAll />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the TitleMain component', () => {
    render(
      <Router>
        <DonateAll />
      </Router>
    );
    const titleMainComponent = screen.getByRole('heading', { name: /Маленькі кроки ведуть нас до великої ПЕРЕМОГИ!/i });
    expect(titleMainComponent).toBeInTheDocument();
  });

  test('should render the TitleSection', () => {
    render(
      <Router>
        <DonateAll />
      </Router>
    );
    const titleSection = screen.getByRole('heading', { name: /ДОПОМОГТИ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders DonateAll component with 7 images (pay elements)', () => {
    render(
      <Router>
        <DonateAll />
      </Router>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(7);
  });
});
