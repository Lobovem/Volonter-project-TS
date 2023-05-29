import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LangSite } from './LangSite';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('LangSite` component', () => {
  test('renders LangSite component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <LangSite />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});
