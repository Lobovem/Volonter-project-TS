import { Link } from 'react-router-dom';
import { SliderFirst } from '../Sliders/SliderFirst/SliderFirstr';
import { TitleMain } from '../TitleMain/TitleMain';
import s from './News.module.scss';

export const News = () => {
  return (
    <div className={s.sectionNews}>
      <h3 className={s.sectionNews__decor}>Новини</h3>
      <div className={s.sectionNews__inner}>
        <div className={s.sectionNews__textWrap}>
          <TitleMain title="Наша мета - вирішення нагальних потреб Сил оборони України"></TitleMain>

          <p className={s.sectionNews__desc}>
            UkrHumBat надає пріоритет в допомозі військовослужбовцям та членам їх сімей, а також, за можливості, допомагає цивільним особам, які опинились у
            зв'язку із війною в скрутному становищі.
          </p>

          <Link to="/news" className={s.sectionNews__link}>
            Читати всі статті
          </Link>
        </div>

        <SliderFirst />
      </div>
    </div>
  );
};
