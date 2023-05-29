import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';
import { News } from './News';
import { Router } from 'react-router-dom';

describe('News', () => {
  test('renders News component', () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          <News />
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
