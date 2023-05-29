/* eslint-disable jsx-a11y/iframe-has-title */
import s from './Contacts.module.scss';

export const Contacts = () => {
  return (
    <div className={s.contacts}>
      <div className={s.contacts__mapWrap}>
        <iframe
          className={s.contacts__map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.803122326351!2d36.21800665182715!3d50.015045226420746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a1234e73cbdb%3A0xcdfc0bda6e6ba6bc!2z0YPQuy4g0JrQvtGB0LzQuNGH0LXRgdC60LDRjywgMjEsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTAwMA!5e0!3m2!1sru!2sua!4v1677322704623!5m2!1sru!2sua"
          frameBorder="0"
          loading="lazy"
          data-testid="map-iframe"
          ferrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className={s.contacts__list}>
        <div className={s.contacts__item}>
          <p className={s.contacts__itemTitle}>Графік роботи:</p>
          <p className={s.contacts__itemDesc}>Пн-Пт - 09:00-16:00</p>
        </div>

        <div className={s.contacts__item}>
          <p className={s.contacts__itemTitle}>Контактні телефони:</p>
          <p className={s.contacts__itemDesc}>+380 (63)-049-40-02</p>
          <p className={s.contacts__itemDesc}>+380 (67)-159-73-73</p>
        </div>

        <div className={s.contacts__item}>
          <p className={s.contacts__itemTitle}>Адреса:</p>
          <p className={s.contacts__itemDesc}>м. Харків, вул.Космічна, буд. 21, оф. 529</p>
        </div>
      </div>
    </div>
  );
};
