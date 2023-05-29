import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Form } from './Form';
import { Provider } from 'react-redux';
import { store } from '../../redux/config/store';

describe('Form` component', () => {
  test('renders Form component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });

  test('should render the title (H2) component form', () => {
    render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { level: 2 });
    expect(titleSection).toBeInTheDocument();
  });

  test('should render the title component form', () => {
    render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const titleSection = screen.getByRole('heading', { name: /ЗВ'ЯЖІТЬСЯ З НАМИ/i });
    expect(titleSection).toBeInTheDocument();
  });

  test('renders and search Form component with 1 images', () => {
    render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(1);
  });

  test('renders and search component button', () => {
    render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const buttonElement = screen.getByRole('button', { type: 'button' });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders and search input and textArea of form', () => {
    render(
      <Provider store={store}>
        <Router>
          <Form />
        </Router>
      </Provider>
    );
    const buttonElement = screen.getAllByRole('textbox');
    expect(buttonElement).toHaveLength(3);
  });
});
