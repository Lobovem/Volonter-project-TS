import { TitleMain } from '../TitleMain/TitleMain';
import s from './DonateAll.module.scss';

export const DonateAll = () => {
  return (
    <div className={s.donateAll}>
      <div className={s.donateAll__wrap}>
        <TitleMain title="Маленькі кроки ведуть нас до великої ПЕРЕМОГИ!"></TitleMain>
        <h2 className={s.donateAll__title}>
          Ми не збираємо кошти і не просимо донати в будь-яких соцмережах. Все робимо своїми силами. Але, якщо хочете допомогти, ми не
          можемо відмовити вам в такому праві.
        </h2>

        <div className={s.donateAll__wrapPay}>
          <div className={s.donateAll__wrapIcon}>
            <img className={s.donateAll__img} src="/img/icon-privat-bank.svg" alt="icon-privat-bank.svg" />
            <p className={s.donateAll__text}>Рахунок (Гривня)</p>
            <p className={s.donateAll__desc}>БО МБФ УКРАЇНСЬКИЙ ГУМАНІТАРНИЙ БАТАЛЬЙОН</p>

            <p className={s.donateAll__text}>ІПН/ЄДРПОУ</p>
            <p className={s.donateAll__desc}>44746691</p>

            <p className={s.donateAll__text}>IBAN</p>
            <p className={s.donateAll__desc}>UA533052990000026004031220892</p>
          </div>

          <div className={s.donateAll__wrapIcon}>
            <img className={s.donateAll__img} src="/img/icon-mono.png" alt="icon-mono.png" />
            <p className={s.donateAll__text}>Карта (Гривна)</p>
            <p className={s.donateAll__desc}>3758640000000000</p>
          </div>

          <div className={s.donateAll__wrapIcon}>
            <img className={s.donateAll__img} src="/img/icon-swift.svg" alt="icon-swift.svg" />
            <p className={s.donateAll__text}>SWIFT (Прекази у гривнях)</p>
            <p className={s.donateAll__desc}>IBAN UA00 000000 00000 00000000000000</p>
          </div>

          <div className={s.donateAll__wrapIcon}>
            <img className={s.donateAll__img} src="/img/icon-pay-pal.svg" alt="icon-pay-pal.svg" />
            <p className={s.donateAll__text}>Перейти до PayPal</p>
            <p className={s.donateAll__desc}>namecompany@gmail.com</p>
          </div>

          <div className={s.donateAll__wrapIconAlt}>
            <img className={s.donateAll__img} src="/img/icon-bitcoin.svg" alt="icon-bitcoin.svg" />
            <div className={s.donateAll__wrapText}>
              <p className={s.donateAll__text}>BTC</p>
              <p className={s.donateAll__desc}>0x0000000000000000000000000000000000000000</p>
            </div>

            <img className={s.donateAll__img} src="/img/icon-ethereum.svg" alt="icon-ethereum.svg" />
            <div className={s.donateAll__wrapText}>
              <p className={s.donateAll__text}>ETH</p>
              <p className={s.donateAll__desc}>0x00000000000000000000000000000000</p>
            </div>

            <img className={s.donateAll__img} src="/img/icon-tether.svg" alt="icon-tether.svg" />
            <div className={s.donateAll__wrapText}>
              <p className={s.donateAll__text}>USDT</p>
              <p className={s.donateAll__desc}>TG00000000000000000000000000000000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
