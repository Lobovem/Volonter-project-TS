import s from './GetHelp.module.scss';

export const GetHelp = () => {
  return (
    <section className={s.getHelp}>
      <div className={s.getHelp__contentWrap}>
        <div className={s.getHelp__imgWrap}>
          <img className={s.getHelp__img} src="/img/get-help.jpg" alt="get-help.jpg" />
        </div>

        <div className={s.getHelp__textWrap}>
          <h2 className={s.getHelp__title}>Хто може отримати допомогу від нашого фонду?</h2>

          <ul className={s.getHelp__descList}>
            <li className={s.getHelp__desc}>Військовослужбовці;</li>
            <li className={s.getHelp__desc}>Члени сімей військовослужбовців;</li>
            <li className={s.getHelp__desc}>Цивільні, які опинилися в скрутному становищі через військові дії;</li>
          </ul>

          <h2 className={s.getHelp__title}>Чим може допомогти наш фонд?</h2>

          <ul className={s.getHelp__descList}>
            <li className={s.getHelp__desc}>
              Медицини та здоров'я - медикаменти та все, що пов'язано зі здоров'ям та рятуванням наших захисників;
            </li>
            <li className={s.getHelp__desc}>Транспорт і засоби переміщення - авто для Сил оборони, включаючи ремонт та обслуговування ;</li>
            <li className={s.getHelp__desc}>Засоби розвідки - тепловізори, дрони, приціли і інші необхідні речі;</li>
            <li className={s.getHelp__desc}>"мокра" печатка;</li>
            <li className={s.getHelp__desc}>Загальна підтримка необхідним - продовольча підтримка, предмети одягу, засоби гігієни;</li>
            <li className={s.getHelp__desc}>Юридична підтримка;</li>
          </ul>

          <h2 className={s.getHelp__title}>Як отримати допомогу від нашого фонду?</h2>
          <p className={s.getHelp__desc}>
            Для того щоб записатись на отримання допомоги, та не вистоювати у чергах, потрібно заповнити реєстраційну форму. Вона
            автоматично реєструє заявку, та надсилає вам на пошту підтвердження реєстрації.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};
