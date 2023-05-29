import { render, screen } from '@testing-library/react';
import { AboutUs } from './AboutUs';

describe('AboutUs', () => {
  test('renders AboutUs component', () => {
    // eslint-disable-next-line testing-library/render-result-naming-convention
    const component = render(<AboutUs />);
    expect(component).toMatchSnapshot();
  });

  test('renders component without errors', () => {
    render(<AboutUs />);
    // You can add additional assertions if needed
  });

  test('should render the TitleMain component', () => {
    render(<AboutUs />);
    const titleMainComponent = screen.getByRole('heading', { name: /UkrHumBat - команда людей, які діють/i });
    expect(titleMainComponent).toBeInTheDocument();
  });

  test('renders the description paragraphs', () => {
    render(<AboutUs />);
    const description1 = screen.getByText(
      "Саме зараз час і місце, коли кожен громадянин своєї країни має стати на її захист і своїми справами: кожен на власному фронті має робити все для Перемоги. Тому дуже важливо, щоб і на передовій, і в тилу, проявлялася позиція громадянина, реалізовувалося глибоке розуміння громадянського обов'язку."
    );
    const description2 = screen.getByText(
      'Таке єднання фронту і тилу, що забезпечує служіння єдиній справі - загальній Перемозі українського народу над російськими загарбниками, забезпечують сьогодні волонтери нашого фонду.'
    );
    expect(description1).toBeInTheDocument();
    expect(description2).toBeInTheDocument();
  });

  test('search tag h2', () => {
    render(<AboutUs />);
    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element).toBeInTheDocument();
  });

  test('search tag h3', () => {
    render(<AboutUs />);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });

  test('search the image', () => {
    render(<AboutUs />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument();
  });
});
