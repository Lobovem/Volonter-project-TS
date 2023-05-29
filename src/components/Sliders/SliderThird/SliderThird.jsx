import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation } from 'swiper';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import s from './SliderThird.module.scss';

export const SliderThird = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();

  return (
    <>
      <Swiper
        className={s.slider}
        onInit={() => setInit(true)}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        wrapperClass={s.slider__wrapper}
        loop={true}
        autoplay={{
          delay: 22000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
        }}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        grid={{
          rows: 1,
          fill: 'row',
        }}
        breakpoints={{
          440: {
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
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,

            loop: false,
            grid: {
              rows: 1,
            },
          },

          1400: {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,

            grid: {
              rows: 2,
            },
          },
        }}
        modules={[Grid, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src="/img/icon-slider-waySupport-2.svg" alt="icon-slider-waySupport-2.svg" />
            <h2 className={s.slider__title}>купівля обладнання</h2>
            <p className={s.slider__desc}>
              Медицини та здоров'я - медикаменти та все, що пов'язано зі здоров'ям та рятуванням наших захисників
            </p>
            {/* <a className={s.slider__link} href="/">
              Читати повністю
            </a> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src="/img/icon-slider-waySupport-1.svg" alt="icon-slider-waySupport-1.svg" />
            <h2 className={s.slider__title}>збір коштів</h2>
            <p className={s.slider__desc}>Транспорт і засоби переміщення - авто для Сил оборони, включаючи ремонт та обслуговування</p>
            {/* <a className={s.slider__link} href="/">
              Читати повністю
            </a> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src="/img/icon-slider-waySupport-2.svg" alt="icon-slider-waySupport-2.svg" />
            <h2 className={s.slider__title}>купівля обладнання</h2>
            <p className={s.slider__desc}>Засоби розвідки - тепловізори, дрони, приціли і інші необхідні речі</p>
            {/* <a className={s.slider__link} href="/">
              Читати повністю
            </a> */}
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <img className={s.slider__img} src="/img/icon-slider-waySupport-1.svg" alt="icon-slider-waySupport-1.svg" />
            <h2 className={s.slider__title}>збір коштів</h2>
            <p className={s.slider__desc}>Загальна підтримка необхідним - продовольча підтримка, предмети одягу, засоби гігієни</p>
            {/* <a className={s.slider__link} href="/">
              Читати повністю
            </a> */}
          </div>
        </SwiperSlide>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
