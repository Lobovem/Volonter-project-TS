import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
import s from './SliderFirst.module.scss';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { listNewsSelector } from '../../../redux/slice/contentSlice';

export const SliderFirst = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [init, setInit] = useState();
  const listNews = useSelector(listNewsSelector);

  return (
    <>
      <Swiper
        className={s.slider}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
          disabledClass: 'swiper-button-disabled',
        }}
        autoplay={{
          delay: 22000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
        }}
        loop={true}
        onInit={() => setInit(true)}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
            loop: true,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
          },
          1400: {
            slidesPerView: 2.4,
            centeredSlides: false,
            spaceBetween: 30,
            loop: true,
          },
        }}
        modules={[Navigation, Autoplay]}
      >
        {listNews &&
          listNews.map((news) => (
            <SwiperSlide className={s.slider__item} key={news.id}>
              <div className={s.slider__itemWrap}>
                <Link to="/news">
                  <img className={s.slider__img} src={news.photoMain} alt={news.photoMain} />
                </Link>

                <Link to="/news" className={s.slider__link}>
                  <h2 className={s.slider__title}>{news.title}</h2>
                </Link>
              </div>
            </SwiperSlide>
          ))}

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
