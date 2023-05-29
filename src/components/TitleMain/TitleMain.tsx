import s from './TitleMain.module.scss';

export const TitleMain = (props:{title:string}) => {
  const { title } = props;
  return <h2 className={s.titleMain}>{title}</h2>;
};
