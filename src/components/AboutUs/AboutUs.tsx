import { TitleMain } from '../TitleMain/TitleMain';
import s from './AboutUs.module.scss';

export const AboutUs = () => {
  return (
    <section className={s.aboutUs}>
      <div className={s.aboutUs__contentWrap}>
        <div className={s.aboutUs__imgWrap}>
          <img className={s.aboutUs__img} src="/img/aboutUs.jpg" alt="aboutUs.jpg" />
        </div>
        <div className={s.aboutUs__textWrap}>
          <TitleMain title="UkrHumBat - команда людей, які діють" />

          <p className={s.aboutUs__desc}>
            Саме зараз час і місце, коли кожен громадянин своєї країни має стати на її захист і своїми справами: кожен на власному фронті
            має робити все для Перемоги. Тому дуже важливо, щоб і на передовій, і в тилу, проявлялася позиція громадянина, реалізовувалося
            глибоке розуміння громадянського обов'язку.
          </p>

          <h3 className={s.aboutUs__title}>Разом до перемоги</h3>
          <p className={s.aboutUs__desc}>
            Таке єднання фронту і тилу, що забезпечує служіння єдиній справі - загальній Перемозі українського народу над російськими
            загарбниками, забезпечують сьогодні волонтери нашого фонду.
          </p>
        </div>
      </div>
    </section>
  );
};
