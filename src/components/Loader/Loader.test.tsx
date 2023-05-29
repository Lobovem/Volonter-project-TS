import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Loader } from './Loader';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('Loader` component', () => {
  test('renders Loader component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Loader />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
