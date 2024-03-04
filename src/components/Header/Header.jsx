import style from './Header.module.css';

import Layout from '../Main/Layout';
import Logo from './Logo/';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import Likes from './Likes';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo />
        <Heading text='Главная' />
        <Search />
        <Likes/>
        <Auth />
      </div>
    </Layout>
  </header>
);

