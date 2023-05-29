import { useEffect } from 'react';
import { PageHome } from '../PageHome/PageHome';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { PageAboutUs } from '../PageAboutUs/PageAboutUs';
import { PageNews } from '../PageNews/PageNews';
import { PageError } from '../PageError/PageError';
import { PageOneNews } from '../PageSimpleNews/PageOneNews';
import { PageGetHelp } from '../PageGetHelp/PageGetHelp';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollToTop } from '../ScrollTop/ScrollTop';
import { PageUserCondition } from '../PageUserConditions/PageUserCondition';
import { PageContacts } from '../PageContacts/PageContacts';
import { PageDonate } from '../PageDonate/PageDonate';
import { Loader } from '../Loader/Loader';
import { fetchMenu, fetchNews } from '../../api/api';
import s from './app.module.scss';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMenu());
    dispatch(fetchNews());
  }, [dispatch]);

  const isLoading = useSelector((state) => state.content.isLoading);
  const error = useSelector((state) => state.content.error);

  if (isLoading) {
    return (
      <div className={s.loader}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1 className={s.error}>{error}</h1>;
  }

  return (
    <div>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/about-us" element={<PageAboutUs />} />
        <Route path="/news" element={<PageNews />}></Route>
        <Route path="/news/:id" element={<PageOneNews />} />
        <Route path="/get-help" element={<PageGetHelp />} />
        <Route path="/donate" element={<PageDonate />} />
        <Route path="/contacts" element={<PageContacts />} />
        <Route path="/user-condition" element={<PageUserCondition />} />
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </div>
  );
};
