import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';

import 'swiper/scss';
import 'swiper/scss/navigation';
// import './styles.scss';
import s from './SliderFifth.module.scss';
import { useRef, useState } from 'react';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';

export const SliderFifth = ({ news }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // const listPhoto = news.find((item) => item.photoList);

  const [init, setInit] = useState();

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
          delay: 2000,
          //option than disable autoplay slides (when click btn or manual changes sliders)
          disableOnInteraction: false,
        }}
        loop={false}
        onInit={() => setInit(true)}
        slidesPerView={1}
        centeredSlides={false}
        spaceBetween={10}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
            // loop: false,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
            // loop: false,
          },
          1400: {
            slidesPerView: 2.3,
            centeredSlides: false,
            spaceBetween: 30,
            // loop: false,
          },
        }}
        modules={[Navigation, Autoplay]}
      >
        <>
          {news.photoList &&
            news.photoList.map((item, index) => (
              <SwiperSlide className={s.slider__item} key={index}>
                <div className={s.slider__itemWrap}>
                  <img className={s.slider__img} src={item} alt={item} />
                </div>
              </SwiperSlide>
            ))}
        </>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
