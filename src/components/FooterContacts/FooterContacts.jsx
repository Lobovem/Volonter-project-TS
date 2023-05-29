import s from './FooterContacts.module.scss';

export const FooterContacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contacts__wrap}>
        <h2 className={s.contacts__title}>контакти</h2>

        <div className={s.contacts__phoneBox}>
          <img className={s.contacts__img} src="/img/icon-phone.svg" alt="icon-phone.svg" />
          <a className={s.contacts__link} href="tel:+380630494002">
            +380 (63)-049-40-02
          </a>
          
          <a className={s.contacts__link} href="tel:+380671597373">
            +380 (67)-159-73-73
          </a>
        </div>

        <div className={s.contacts__adressBox}>
          <img className={s.contacts__img} src="/img/icon-adress.svg" alt="icon-adress.svg" />
          <a className={s.contacts__link} href="https://goo.gl/maps/uXTuc6J6nSarrwsW7" target="blank">
            <address className={s.contacts__desc}>м. Харків, вул.Космічна, буд. 21, оф. 529</address>
          </a>
        </div>
      </div>
    </div>
  );
};
