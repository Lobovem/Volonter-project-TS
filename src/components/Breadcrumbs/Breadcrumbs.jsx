import useBreadcrumbs from 'use-react-router-breadcrumbs';
import React from 'react';
import { Link } from 'react-router-dom';
import { listMenuSelector } from '../../redux/slice/contentSlice';
import { useSelector } from 'react-redux';
import s from './Breadcrumbs.module.scss';

export const Breadcrumbs = () => {
  const listMenu = useSelector(listMenuSelector);
  const breadcrumbs = useBreadcrumbs(listMenu);

  return (
    <nav className={s.breadcrumbs}>
      {breadcrumbs &&
        breadcrumbs.map(({ location, match, breadcrumb }) => (
          <Link
            className={location.pathname === match.pathname ? `${s.breadcrumbs__link} ${s.breadcrumbs__link_active}` : s.breadcrumbs__link}
            key={match.pathname}
            to={match.pathname}
          >
            {breadcrumb}
          </Link>
        ))}
    </nav>
  );
};
