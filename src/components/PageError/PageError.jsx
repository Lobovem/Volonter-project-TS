import { Link } from 'react-router-dom';
import { Btn } from '../kit/Btn/Btn';
import s from './PageError.module.scss';

export const PageError = () => {
  return (
    <div className={s.pageError}>
      <div className={s.pageError__wrap}>
        <h1 className={s.pageError__title}>
          <span>404</span>
        </h1>
        <p className={s.pageError__desc}>Упс! Щось пішло не так!</p>
        <Link to="/">
          <Btn title="На головну" className="btn" type="button" />
        </Link>
      </div>
      <div className={s.pageError__footerWrap}>
        <div className={s.pageError__line}></div>
      </div>
    </div>
  );
};
