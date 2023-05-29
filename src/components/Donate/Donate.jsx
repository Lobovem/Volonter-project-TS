import { Link } from 'react-router-dom';
import { Btn } from '../kit/Btn/Btn';
import s from './Donate.module.scss';

export const Donate = () => {
  return (
    <div className={s.donate}>
      <div className={s.donate__header}>
        <p className={`${s.donate__headerTitle} ${s.donate__headerTitle_first}`}>підтримай україну</p>
        <p className={`${s.donate__headerTitle} ${s.donate__headerTitle_second}`}>підтримай україну</p>
        <p className={`${s.donate__headerTitle} ${s.donate__headerTitle_third}`}>підтримай україну</p>
      </div>

      <div className={s.donate__main}>
        <h2 className={s.donate__mainTitle}>Маленькі кроки ведуть нас до великої ПЕРЕМОГИ!</h2>
        <p className={s.donate__mainDesc}>Кожна гривня для нас дуже важлива, тому зробити свій внесок ви можете саме зараз</p>

        <Link to="/donate">
          <Btn title="задонатити" className="btn" type="button" />
        </Link>
      </div>
    </div>
  );
};
