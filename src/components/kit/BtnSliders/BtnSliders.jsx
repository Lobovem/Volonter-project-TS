import s from './BtnSliders.module.scss';

export const BtnSliders = ({ prevRef, nextRef, className }) => {
  return (
    <div className={s[className]}>
      <button className={s.btnSlider__prev} ref={prevRef}></button>
      <button className={s.btnSlider__next} ref={nextRef}></button>
    </div>
  );
};
