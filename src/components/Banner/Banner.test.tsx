import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Banner } from './Banner';

describe('Banner component', () => {
  test('renders Banner component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Router>
        <Banner />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });
  test('search title tag h1', () => {
    render(
      <Router>
        <Banner />
      </Router>
    );
    const h1Element = screen.getByRole('heading', { level: 1 });
    expect(h1Element).toBeInTheDocument();
  });

  test('renders and search component button', () => {
    render(
      <Router>
        <Banner />
      </Router>
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('search image', () => {
    render(
      <Router>
        <Banner />
      </Router>
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  });
});
