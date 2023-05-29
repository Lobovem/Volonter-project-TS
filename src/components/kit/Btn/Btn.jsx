import s from './Btn.module.scss';

export const Btn = (props) => {
  const { title, onClick, className, type } = props;
  return (
    <button className={s[className]} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
