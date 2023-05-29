import { LangSite } from '../LangSite/LangSite';
import { Menu } from '../Menu/Menu';
import { LogoMain } from '../LogoMain/LogoMain';
import { Burger } from '../kit/Burger/Burger';
import s from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header className={s.header}>
        <div className={s.header__wrap}>
          <LogoMain />
          <div className={s.header__menuWrap}>
            <Burger />
            <Menu />
            <LangSite href="#" />
          </div>
        </div>
      </header>
    </>
  );
};
