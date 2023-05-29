import { useParams } from 'react-router-dom';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { oneNewsSelector } from '../../redux/slice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { fetchOneNews } from '../../api/api';
import { AppDispatch } from '../../redux/config/store';
import s from './OneNews.module.scss';

export const OneNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchOneNews(id));
  }, [id]);

  const news = useSelector(oneNewsSelector);

  return (
    <>
      <div className={s.simpleNews}>
        <div key={news.id}>
          <h1 className={s.simpleNews__title}>{news.title}</h1>
          <div className={s.simpleNews__wrap}>
            <h3 className={s.simpleNews__decor}>Новини</h3>
            <div>
              <p className={s.simpleNews__text}>{news.desc}</p>
            </div>
            <SliderFifth news={news}></SliderFifth>
          </div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
