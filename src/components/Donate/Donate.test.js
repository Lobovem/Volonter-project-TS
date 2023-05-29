import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Donate } from './Donate';

describe('Donate component', () => {
  test('renders Donate component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Router>
        <Donate />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('search title tag h2', () => {
    render(
      <Router>
        <Donate />
      </Router>
    );
    const h1Element = screen.getByRole('heading', { level: 2 });
    expect(h1Element).toBeInTheDocument();
  });

  test('renders and search component btn', () => {
    render(
      <Router>
        <Donate />
      </Router>
    );
    const buttonElement = screen.getByRole('button', { type: 'button' });
    expect(buttonElement).toBeInTheDocument();
  });
});
