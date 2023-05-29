import { SliderFourth } from '../Sliders/SliderFourth/SliderFourth';
import s from './Teams.module.scss';

export const Teams = () => {
  return (
    <div className={s.teams}>
      <h3 className={s.teams__decor}>Командa</h3>
      <SliderFourth></SliderFourth>
    </div>
  );
};
