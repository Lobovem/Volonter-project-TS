import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';
import { News } from './News';
import { MemoryRouter } from 'react-router-dom';

describe('News', () => {
  test('renders News component', () => {
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <News />
        </MemoryRouter>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
