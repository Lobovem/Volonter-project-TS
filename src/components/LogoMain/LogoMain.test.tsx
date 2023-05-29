import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LogoMain } from './LogoMain';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('LogoMain` component', () => {
  test('renders LogoMain component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <LogoMain />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('renders and search LogoMain component with 1 images', () => {
    render(
      <Provider store={store}>
        <Router>
          <LogoMain />
        </Router>
      </Provider>
    );
    const phoneLinks = screen.getAllByRole('img'); // Search all links
    expect(phoneLinks).toHaveLength(1);
  });
});
