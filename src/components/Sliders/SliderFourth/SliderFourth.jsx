import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation } from 'swiper';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import s from './SliderFourth.module.scss';

export const SliderFourth = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        className={s.slider}
        wrapperClass={s.slider__wrapper}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.3}
        spaceBetween={20}
        autoplay={{
          delay: 222000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
        }}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        breakpoints={{
          440: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            loop: true,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            grid: {
              rows: 1,
            },
          },

          994: {
            slidesPerView: 2,
            spaceBetween: 40,
            centeredSlides: false,
            loop: true,
            grid: {
              rows: 1,
            },
          },

          1400: {
            slidesPerView: 2,
            spaceBetween: 0,
            centeredSlides: false,
            loop: true,
            grid: {
              rows: 2,
            },
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>Максим Журавлев</h2>
            <p className={s.slider__position}>Голова фонду</p>
            <p className={s.slider__desc}>Засновник благодійного фонду, Волонтер та висококваліфікований спеціаліст в галузі права</p>
            <img className={s.slider__img} src="/img/team-1.jpeg" alt="team-1.jpeg" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>Алексей Волонтеров</h2>
            <p className={s.slider__position}>Руководитель штаба волонтер</p>
            <p className={s.slider__desc}>Найкращий логист эвер и еще какой-то важный текст, но не очень длинный</p>
            <img className={s.slider__img} src="/img/team-2.png" alt="team-2.png" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>Іванов Тимур Іванович</h2>
            <p className={s.slider__position}>Доброволець</p>
            <p className={s.slider__desc}>Співробітник благодійного фонду, Волонтер та висококваліфікований спеціаліст в галузі права</p>
            <img className={s.slider__img} src="/img/team-3.jpeg" alt="team-3.jpeg" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>Микола Франко</h2>
            <p className={s.slider__position}>Заместитель руководителя</p>
            <p className={s.slider__desc}>Засновник благодійного фонду, Волонтер та висококваліфікований спеціаліст в галузі права</p>
            <img className={s.slider__img} src="/img/team-4.png" alt="team-4.png" />
          </div>
        </SwiperSlide>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSliderAlt'}></BtnSliders>
      </Swiper>
    </>
  );
};
