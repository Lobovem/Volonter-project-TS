import { Btn } from '../kit/Btn/Btn';
import { SocialLine } from '../SocialLine/SocialLine';
import { Link } from 'react-router-dom';
import s from './Banner.module.scss';

export const Banner = () => {
  return (
    <>
      <section className={s.banner}>
        <img className={s.banner__img} src="/img/ukraine-flag.png" alt="" />
        <div className={s.banner__textWrap}>
          <h1 className={s.banner__title}>Єдність країни забезпечує її Перемогу!</h1>
          <p className={s.banner__desc}>
            Міжнародний благодійний фонд «Український гуманітарний батальйон» – об’єднання однодумців, яке має на меті допомагати в ім’я
            Української Перемоги, Свободи та Демократії.<br></br> <br></br>Приєднуйтесь до нас, щоб жити, допомагаючи іншим і творити зміни
            на краще разом!
          </p>

          <Link to="about-us">
            <Btn title="Про проєкт" className="btn" type="button" />
          </Link>
        </div>
      </section>
      <SocialLine />
    </>
  );
};
