import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GetHelp } from './GetHelp';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('GetHelp` component', () => {
  test('renders GetHelp component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <GetHelp />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the titles (H2) component GetHelp', () => {
    render(
      <Provider store={store}>
        <Router>
          <GetHelp />
        </Router>
      </Provider>
    );
    const titleSection = screen.getAllByRole('heading', { level: 2 });
    expect(titleSection).toHaveLength(3);
  });

  test('renders and search GetHelp component with 1 images', () => {
    render(
      <Provider store={store}>
        <Router>
          <GetHelp />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
  });
});
