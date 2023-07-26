import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { listMenuSelector, burgerMenuSelector, changeBurgerState } from '../../redux/slice/contentSlice';
import s from './Menu.module.scss';

export const Menu = () => {
  const dispatch = useDispatch();
  const burgerMenu = useSelector(burgerMenuSelector);
  const listMenu = useSelector(listMenuSelector);

  const handleBlock = () => {
    document.body.classList.toggle('block');
  };

  return (
    <nav className={!burgerMenu ? s.menu : `${s.menu} ${s.active}`}>
      <ul
        className={s.menu__list}
        onClick={() => {
          dispatch(changeBurgerState(!burgerMenu));
          handleBlock();
        }}
      >
        {listMenu &&
          listMenu.map((item) => {
            if (item.show)
              return (
                <li key={item.id} className={s.menu__item}>
                  <NavLink to={item.path} className={({ isActive }) => (isActive ? `${s.menu__link} ${s.menu__linkActive}` : s.menu__link)}>
                    {item.title}
                  </NavLink>
                </li>
              );
            return null;
          })}
      </ul>
    </nav>
  );
};
