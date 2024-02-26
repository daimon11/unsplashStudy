import style from './Main.module.css';
import Layout from './Layout';

export const Main = () => {
  console.log('Main');

  return (
    <main className={style.main}>
      <Layout>
      </Layout>
    </main>
  )
};
