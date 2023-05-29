import { TitleMain } from '../TitleMain/TitleMain';
import s from './YoutubeVideo.module.scss';

export const YoutubeVideo = () => {
  return (
    <div className={s.youtubeVideo}>
      <div className={s.youtubeVideo__wrapIframe}>
        <iframe
          className={s.youtubeVideo__iframe}
          src="https://www.youtube.com/embed/yz9zqm-TAIg"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          data-testid="map-iframe"
        ></iframe>
      </div>

      <TitleMain title="Допомога нашим братам та сестрам"> </TitleMain>
      <p className={s.youtubeVideo__desc}>
        Для того щоб записатись на отримання допомоги, та не вистоювати у чергах, потрібно заповнити реєстраційну форму. Вона автоматично
        реєструє заявку, та надсилає вам на пошту підтвердження реєстрації. Для того щоб записатись на отримання допомоги, та не вистоювати
        у чергах, потрібно заповнити реєстраційну форму. Вона автоматично реєструє заявку, та надсилає вам на пошту підтвердження
        реєстрації.
      </p>

      <p className={s.youtubeVideo__desc}>
        За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html -елементами, які
        визначають його структуру, з можливістю вставляти зовнішні посилання, але не тільки. Фактично, вставляючи будь -який фантастичний
        текст або відомий текст, це вірш, промова, літературний уривок, текст пісні тощо, наш текстовий генератор забезпечить випадкове
        виділення термінів і кроків для створення власного ексклюзивного Lorem Ipsum. Фактично. Нашою першочерговою метою є вирішення
        нагальних проблем ЗСУ. За допомогою онлайн -генератора тексту ви можете обробляти свій особистий Lorem Ipsum , збагачуючи його html
        -елементами, які визначають його структуру, з можливістю вставляти зовнішні посилання, але не тільки...
      </p>
    </div>
  );
};
