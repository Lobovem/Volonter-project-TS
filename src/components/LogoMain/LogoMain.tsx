import React from 'react';
import { Link } from 'react-router-dom';
import s from './LogoMain.module.scss';

export const LogoMain = () => {
  return (
    <Link to="/" className={s.logoMain}>
      <img src="/img/logo-main.svg" alt="ukraine-flag.png" />
    </Link>
  );
};
