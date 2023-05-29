import { BtnProps } from '../../../types/types';
import s from './BtnSliders.module.scss';

export const BtnSliders = (props:BtnProps) => {
  const { prevRef, nextRef, className } = props;
  return (
    <div className={s[className]}>
      <button className={s.btnSlider__prev} ref={prevRef}></button>
      <button className={s.btnSlider__next} ref={nextRef}></button>
    </div>
  );
};
