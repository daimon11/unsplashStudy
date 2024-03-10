import { Link } from 'react-router-dom';
import style from './Likes.module.css';

export const Likes = () => {
  return <Link to='/likes' className={style.likes_btn}>{'❤️'}</Link>;
};