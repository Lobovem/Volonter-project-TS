import { ITitleProps } from '../../types/types';
import s from './TitleMain.module.scss';

export const TitleMain = (props:ITitleProps) => {
  const { title } = props;
  return <h2 className={s.titleMain}>{title}</h2>;
};
