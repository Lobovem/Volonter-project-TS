import s from './UserConditions.module.scss';

export const UserConditions = () => {
  return (
    <div className={s.userCondition}>
      <h3 className={s.userCondition__decor}>Угода</h3>

      <p className={s.userCondition__desc}>
        Я («Користувач») погоджуюсь з умовами цієї Угоди користувача і, використовуючи сайт: ukrhumbat.com.ua (надалі – «Сайт»), у разі направлення заявки на
        отримання допомоги, надаю згоду на обробку і захист своїх персональних даних, як Користувача, в обсязі, порядку, відповідно до мети обробки.
      </p>

      <h2 className={s.userCondition__title}>Персональні дані</h2>
      <p className={s.userCondition__desc}>
        На виконання вимог Закону України "Про захист персональних даних" шляхом заповнення заявки на отримання допомоги даю згоду на обробку вказаних у заявці
        моїх персональних даних.
      </p>
    </div>
  );
};
