import s from './FooterSocial.module.scss';

export const FooterSocial = () => {
  return (
    <div className={s.social}>
      <div className={s.social__wrap}>
        <h2 className={s.social__title}>соціальні мережі</h2>

        <a className={s.social__wrapLink} target="blank" href="https://www.instagram.com/ukrhumbat/?igshid=YmMyMTA2M2Y=">
          <img className={s.social__img} src="/img/icon-instagram.svg" alt="icon-instagram.svg" />
          <p className={s.social__desc}>instagram</p>
        </a>

        <a
          className={s.social__wrapLink}
          target="blank"
          href="https://www.facebook.com/people/%D0%9C%D0%91%D0%A4-%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-%D0%B3%D1%83%D0%BC%D0%B0%D0%BD%D1%96%D1%82%D0%B0%D1%80%D0%BD%D0%B8%D0%B9-%D0%B1%D0%B0%D1%82%D0%B0%D0%BB%D1%8C%D0%BE%D0%BD/100085936770532/"
        >
          <img className={s.social__img} src="/img/icon-facebook.svg" alt="icon-facebook.svg" />
          <p className={s.social__desc}>facebook</p>
        </a>
      </div>
    </div>
  );
};
