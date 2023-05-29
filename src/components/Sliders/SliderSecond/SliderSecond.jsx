import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Grid, Navigation } from 'swiper';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import './styles.scss';
import s from './SliderSecond.module.scss';
import { BtnSliders } from '../../kit/BtnSliders/BtnSliders';

export const SliderSecond = () => {
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
          delay: 2000,
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
            slidesPerView: 3,
            spaceBetween: 20,
            centeredSlides: false,
            loop: true,
            grid: {
              rows: 1,
            },
          },

          994: {
            slidesPerView: 4,
            spaceBetween: 20,
            centeredSlides: false,
            loop: false,
            grid: {
              rows: 1,
            },
          },

          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
            loop: true,
            grid: {
              rows: 2,
            },
          },
        }}
        modules={[Grid, Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>500 тонн</h2>
            <p className={s.slider__desc}>Гуманітарної допомоги видано більше ніж 15 000 ВПО, інвалідам та малозабезпеченим</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>56</h2>
            <p className={s.slider__desc}>Тепловізорів та прицілів загалом куплено для ЗСУ</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>120</h2>
            <p className={s.slider__desc}>Автівок передано до військових частин</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>64</h2>
            <p className={s.slider__desc}>Дронів закуплено та передано на потреби армії</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>4</h2>
            <p className={s.slider__desc}>Реанімобіля,вже передано на фронт та рятують життя наших героїв</p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.slider__itemWrap}>
            <h2 className={s.slider__title}>64</h2>
            <p className={s.slider__desc}>Дронів закуплено та передано на потреби армії</p>
          </div>
        </SwiperSlide>

        <BtnSliders nextRef={nextRef} prevRef={prevRef} className={'btnSlider'}></BtnSliders>
      </Swiper>
    </>
  );
};
