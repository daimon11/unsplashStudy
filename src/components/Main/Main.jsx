import React from 'react';
import style from './Main.module.css';
import Layout from './Layout';
import List from './Layout/List';

import { useDispatch } from 'react-redux';
import { getPhotosAsync } from '../../api/images';

export const Main = () => {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(getPhotosAsync());
  }, [dispatch]);

  return (
    <main className={style.main}>
      <Layout>
        <List />
      </Layout>
    </main>
  );
};
