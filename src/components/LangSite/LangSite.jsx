import s from './LangSite.module.scss';

export const LangSite = (props) => {
  const { href } = props;

  return (
    <div className={s.langWrap}>
      <a className={`${s.langWrap__link} ${s.langWrap__link_active}`} href={href}>
        UA
      </a>
      <a className={s.langWrap__link} href={href}>
        EN
      </a>
    </div>
  );
};
