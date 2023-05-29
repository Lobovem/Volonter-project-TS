import { render, screen } from '@testing-library/react';
import { NewsList } from './NewsList';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../redux/config/store';

describe('NewsList', () => {
  const data = [
    {
        "id": "1",
        "title": "Якась важлива новина 1",
        "desc": "За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це вірш, промова, літературний уривок, текст пісні тощо, наш текстовий генератор забезпечить випадкове виділення термінів і кроків для створення власного ексклюзивного Lorem Ipsum. Фактично.",
        "photoMain": "/img/slider-news-1.jpg",
        "photoList": [
            "/img/slider-news-1.jpg",
            "/img/slider-news-2.jpg",
            "/img/slider-news-1.jpg",
            "/img/slider-news-2.jpg"
        ],
    },
    {
        "id": "2",
        "title": "Якась важлива новина 2",
        "desc": "За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які визначають його структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний текст або відомий текст, це вірш, промова, літературний уривок, текст пісні тощо, наш текстовий генератор забезпечить випадкове виділення термінів і кроків для створення власного ексклюзивного Lorem Ipsum. Фактично.",
        "photoMain": "/img/slider-news-2.jpg",
        "photoList": [
            "/img/slider-news-1.jpg",
            "/img/slider-news-2.jpg",
            "/img/slider-news-1.jpg",
            "/img/slider-news-2.jpg"
        ],
    }
]

  test('renders NewsList component', () => {
    const { container } = render( 
    
    <Provider store={store}>
    <Router>
    <NewsList currentItems={data}/>
    </Router>
  </Provider>)

    expect(container).toMatchSnapshot();
  });

  test('search tag h3 (decor)', () => {
    render( <Provider store={store}>
      <Router>
      <NewsList currentItems={data}/>
      </Router>
    </Provider>);
    const h3Element = screen.getByRole('heading', { level: 3 });
    expect(h3Element).toBeInTheDocument();
  });
});
