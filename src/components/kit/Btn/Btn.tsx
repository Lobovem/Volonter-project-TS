import { BtnProps } from '../../../types/types';
import s from './Btn.module.scss';

export const Btn = (props:BtnProps) => {
  const { title, onClick, className, type } = props;
  return (
    <button className={s[className]} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
