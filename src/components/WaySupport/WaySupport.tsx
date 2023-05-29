import { SliderThird } from '../Sliders/SliderThird/SliderThird';
import s from './WaySupport.module.scss';

export const WaySupport = () => {
  return (
    <div className={s.waySupport}>
      <h3 className={s.waySupport__decor}>Підтримка</h3>
      <SliderThird></SliderThird>
    </div>
  );
};
