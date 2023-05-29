import { useParams } from 'react-router-dom';
import { YoutubeVideo } from '../YoutubeVideo/YoutubeVideo';
import { oneNewsSelector } from '../../redux/slice/contentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { SliderFifth } from '../Sliders/SliderFifth/SliderFifth';
import { fetchOneNews } from '../../api/api';
import s from './OneNews.module.scss';

export const OneNews = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneNews(id));
  }, [id]);

  const oneNews = useSelector(oneNewsSelector);

  return (
    <>
      <div className={s.simpleNews}>
        <div key={oneNews.id}>
          <h1 className={s.simpleNews__title}>{oneNews.title}</h1>
          <div className={s.simpleNews__wrap}>
            <h3 className={s.simpleNews__decor}>Новини</h3>
            <div>
              <p className={s.simpleNews__text}>{oneNews.desc}</p>
            </div>
            <SliderFifth news={oneNews}></SliderFifth>
          </div>
        </div>
      </div>
      <YoutubeVideo></YoutubeVideo>
    </>
  );
};
